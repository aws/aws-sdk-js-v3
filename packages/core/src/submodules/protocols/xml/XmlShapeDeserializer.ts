import { NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import { parseRfc3339DateTime, parseRfc3339DateTimeWithOffset } from "@smithy/core/serde";
import { getValueFromTextNode } from "@smithy/smithy-client";
import type { Schema, ShapeDeserializer } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";
import { XMLParser } from "fast-xml-parser";

export class XmlShapeDeserializer implements ShapeDeserializer {
  private registry: TypeRegistry;
  public constructor(private serviceNamespace: string) {
    this.registry = TypeRegistry.for(serviceNamespace);
  }

  public read(schema: Schema, bytes: Uint8Array): any {
    const xmlString = toUtf8(bytes);
    const parsedObject = this.parseXml(xmlString);
    return this.readSchema(schema, parsedObject);
  }
  public getContainerSize(): number {
    throw new Error("Method not implemented.");
  }

  private readSchema(_schema: Schema, value: any, memberName = ""): any {
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
        const memberNs = ns.getMemberSchema();
        const buffer = [] as any[];
        for (const v of value) {
          if (v != null || sparse) {
            buffer.push(this.readSchema(memberNs.getSchema(), v));
          }
        }
        return buffer;
      }
      const buffer = {} as any;
      if (ns.isStructSchema()) {
        // struct
        for (const key of Object.keys(value)) {
          const memberNs = ns.getMemberSchema(key);
          const traits = memberNs.getMergedTraits();

          if (value[key] != null) {
            buffer[traits.xmlName ?? key] = this.readSchema(memberNs.getSchema(), value[key], memberNs.getName());
          }
        }
      } else {
        // map
        const memberNs = ns.getMemberSchema();
        for (const key of Object.keys(value)) {
          if (value[key] != null || sparse) {
            buffer[key] = this.readSchema(memberNs.getSchema(), value[key]);
          }
        }
      }
      return buffer;
    } else {
      // simple
      if (schema === "time") {
        // default timestampFormat
        return parseRfc3339DateTime(value);
      } else if (schema === "date-time") {
        // date-time timestampFormat
        return parseRfc3339DateTimeWithOffset(value);
      }

      const simpleType = this.registry.getSimpleType(memberName);
      switch (simpleType) {
        case "number":
          return Number(value);
        case "bigint":
          return BigInt(value);
        case "bigdecimal":
          // todo(schema)
          throw new Error("bigdecimal not implemented");
        case "boolean":
          return String(value).toLowerCase() === "true";
      }
      return value;
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
