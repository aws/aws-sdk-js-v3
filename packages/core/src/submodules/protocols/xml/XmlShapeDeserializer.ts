import { FromStringShapeDeserializer } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import { getValueFromTextNode } from "@smithy/smithy-client";
import type { Schema, SerdeFunctions, ShapeDeserializer } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";
import { XMLParser } from "fast-xml-parser";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import type { XmlSettings } from "./XmlCodec";

/**
 * @alpha
 */
export class XmlShapeDeserializer extends SerdeContextConfig implements ShapeDeserializer<Uint8Array | string> {
  private stringDeserializer: FromStringShapeDeserializer;

  public constructor(public readonly settings: XmlSettings) {
    super();
    this.stringDeserializer = new FromStringShapeDeserializer(settings);
  }

  public setSerdeContext(serdeContext: SerdeFunctions): void {
    this.serdeContext = serdeContext;
    this.stringDeserializer.setSerdeContext(serdeContext);
  }

  /**
   * @param schema - describing the data.
   * @param bytes - serialized data.
   * @param key - used by AwsQuery to step one additional depth into the object before reading it.
   */
  public read(schema: Schema, bytes: Uint8Array | string, key?: string): any {
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

    const xmlString = (this.serdeContext?.utf8Encoder ?? toUtf8)(bytes);
    const parsedObject = this.parseXml(xmlString);
    return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
  }

  public readSchema(_schema: Schema, value: any): any {
    const ns = NormalizedSchema.of(_schema);
    const traits = ns.getMergedTraits();

    if (ns.isListSchema() && !Array.isArray(value)) {
      // single item in what should have been a list.
      return this.readSchema(ns, [value]);
    }

    if (value == null) {
      return value;
    }

    if (typeof value === "object") {
      const sparse = !!traits.sparse;
      const flat = !!traits.xmlFlattened;

      if (ns.isListSchema()) {
        const listValue = ns.getValueSchema();
        const buffer = [] as any[];

        const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
        const source = flat ? value : (value[0] ?? value)[sourceKey];
        const sourceArray = Array.isArray(source) ? source : [source];

        for (const v of sourceArray) {
          if (v != null || sparse) {
            buffer.push(this.readSchema(listValue, v));
          }
        }
        return buffer;
      }

      const buffer = {} as any;
      if (ns.isMapSchema()) {
        const keyNs = ns.getKeySchema();
        const memberNs = ns.getValueSchema();
        let entries: any[];
        if (flat) {
          entries = Array.isArray(value) ? value : [value];
        } else {
          entries = Array.isArray(value.entry) ? value.entry : [value.entry];
        }
        const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
        const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
        for (const entry of entries) {
          const key = entry[keyProperty];
          const value = entry[valueProperty];
          if (value != null || sparse) {
            buffer[key] = this.readSchema(memberNs, value);
          }
        }
        return buffer;
      }

      if (ns.isStructSchema()) {
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMergedTraits();
          const xmlObjectKey = !memberTraits.httpPayload
            ? memberSchema.getMemberTraits().xmlName ?? memberName
            : memberTraits.xmlName ?? memberSchema.getName()!;

          if (value[xmlObjectKey] != null) {
            buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
          }
        }
        return buffer;
      }

      if (ns.isDocumentSchema()) {
        // this should indicate an error being deserialized with no schema.
        return value;
      }

      throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
    }
    // non-object aggregate type.
    if (ns.isListSchema()) {
      return [];
    }
    if (ns.isMapSchema() || ns.isStructSchema()) {
      return {} as any;
    }

    // simple
    return this.stringDeserializer.read(ns, value as string);
  }

  protected parseXml(xml: string): any {
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
