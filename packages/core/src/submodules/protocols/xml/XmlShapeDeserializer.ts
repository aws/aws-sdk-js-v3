import { FromStringShapeDeserializer } from "@smithy/core/protocols";
import { NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import { parseRfc3339DateTime } from "@smithy/core/serde";
import { getValueFromTextNode } from "@smithy/smithy-client";
import type { Schema, SerdeContext, ShapeDeserializer } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";
import { XMLParser } from "fast-xml-parser";

export class XmlShapeDeserializer implements ShapeDeserializer<Uint8Array | string> {
  private registry: TypeRegistry;
  private stringDeserializer: FromStringShapeDeserializer;
  private serdeContext?: SerdeContext;

  public constructor(private serviceNamespace: string) {
    this.registry = TypeRegistry.for(serviceNamespace);
    this.stringDeserializer = new FromStringShapeDeserializer(this.registry, (value) => parseRfc3339DateTime(value)!);
  }

  public setSerdeContext(serdeContext: SerdeContext): void {
    this.serdeContext = serdeContext;
    this.stringDeserializer.setSerdeContext(serdeContext);
  }

  public read(schema: Schema, bytes: Uint8Array | string): any {
    const ns = NormalizedSchema.of(schema);
    const memberSchemas = ns.getMemberSchemas();
    const isEventPayload =
      ns.isStructSchema() &&
      ns.isMemberSchema() &&
      !!Object.values(memberSchemas).find((memberNs) => {
        return !!memberNs.getMemberTraits().eventPayload;
      });

    if (isEventPayload) {
      const output = {} as any;
      const memberName = Object.keys(memberSchemas)[0];
      const eventMemberSchema = memberSchemas[memberName];
      if (eventMemberSchema.isBlobSchema()) {
        output[memberName] = bytes;
      } else {
        output[memberName] = this.read(memberSchemas[memberName], bytes);
      }
      return output;
    }

    const xmlString = toUtf8(bytes);
    const parsedObject = this.parseXml(xmlString);
    return this.readSchema(schema, parsedObject);
  }

  private readSchema(_schema: Schema, value: any): any {
    const ns = NormalizedSchema.of(_schema);
    const traits = ns.getMergedTraits();
    const schema = ns.getSchema();

    if (ns.isListSchema() && !Array.isArray(value)) {
      // single item in what should have been a list.
      return this.readSchema(schema, [value]);
    }

    if (value == null) {
      return value;
    }
    if (typeof value === "object") {
      const sparse = !!traits.sparse;
      if (Array.isArray(value)) {
        // list
        const memberNs = ns.getValueSchema();
        const buffer = [] as any[];
        for (const v of value) {
          if (v != null || sparse) {
            buffer.push(this.readSchema(memberNs.getSchema(), v));
          }
        }
        return buffer;
      }
      const buffer = {} as any;
      if (ns.isMapSchema()) {
        // map
        const memberNs = ns.getValueSchema();
        for (const key of Object.keys(value)) {
          if (value[key] != null || sparse) {
            buffer[key] = this.readSchema(memberNs.getSchema(), value[key]);
          }
        }
      } else {
        // struct
        const xmlNameToMemberName = {} as Record<string, string>;
        if (ns.isStructSchema()) {
          for (const [member, memberSchema] of Object.entries(ns.getMemberSchemas())) {
            const memberTraits = memberSchema.getMergedTraits();
            if (memberTraits.xmlName) {
              xmlNameToMemberName[memberTraits.xmlName] = member;
            }
          }
        }

        for (const key of Object.keys(value)) {
          const assignToKey = xmlNameToMemberName[key] ?? key;
          const memberNs = ns.getMemberSchema(assignToKey);
          if (memberNs === undefined) {
            continue;
          }

          if (value[key] != null) {
            buffer[assignToKey] = this.readSchema(memberNs, value[key]);
          }
        }
      }
      return buffer;
    } else {
      // simple
      return this.stringDeserializer.read(ns, value as string);
    }
  }

  private parseXml(xml: string): any {
    if (xml.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");

      let parsedObj;
      try {
        parsedObj = parser.parse(xml, true);
      } catch (e: any) {
        if (e && typeof e === "object") {
          Object.defineProperty(e, "$responseBodyText", {
            value: xml,
          });
        }
        throw e;
      }

      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  }
}
