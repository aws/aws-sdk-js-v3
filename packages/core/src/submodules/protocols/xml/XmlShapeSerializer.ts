import { XmlNode, XmlText } from "@aws-sdk/xml-builder";
import { determineTimestampFormat } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import { generateIdempotencyToken, NumericValue } from "@smithy/core/serde";
import { dateToUtcString } from "@smithy/smithy-client";
import type {
  Schema as ISchema,
  ShapeSerializer,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { fromBase64, toBase64 } from "@smithy/util-base64";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { serializingStructIterator } from "../structIterator";
import { XmlSettings } from "./XmlCodec";

type XmlNamespaceAttributeValuePair = [string, string] | [undefined, undefined];

/**
 * @public
 */
export class XmlShapeSerializer extends SerdeContextConfig implements ShapeSerializer<string | Uint8Array> {
  private stringBuffer?: string;
  private byteBuffer?: Uint8Array;
  private buffer?: XmlNode;

  public constructor(public readonly settings: XmlSettings) {
    super();
  }

  public write(schema: ISchema, value: unknown): void {
    const ns = NormalizedSchema.of(schema);
    if (ns.isStringSchema() && typeof value === "string") {
      this.stringBuffer = value as string;
    } else if (ns.isBlobSchema()) {
      this.byteBuffer =
        "byteLength" in (value as Uint8Array)
          ? (value as Uint8Array)
          : (this.serdeContext?.base64Decoder ?? fromBase64)(value as string);
    } else {
      this.buffer = this.writeStruct(ns, value, undefined) as XmlNode;
      const traits = ns.getMergedTraits();
      if (traits.httpPayload && !traits.xmlName) {
        this.buffer.withName(ns.getName()!);
      }
    }
  }

  public flush(): string | Uint8Array {
    if (this.byteBuffer !== undefined) {
      const bytes = this.byteBuffer;
      delete this.byteBuffer;
      return bytes;
    }
    if (this.stringBuffer !== undefined) {
      const str = this.stringBuffer;
      delete this.stringBuffer;
      return str;
    }
    const buffer = this.buffer!;
    if (this.settings.xmlNamespace) {
      if (!(buffer as any)?.attributes?.["xmlns"]) {
        buffer.addAttribute("xmlns", this.settings.xmlNamespace);
      }
    }
    delete this.buffer;
    return buffer.toString();
  }

  private writeStruct(ns: NormalizedSchema, value: unknown, parentXmlns: string | undefined): XmlNode {
    const traits = ns.getMergedTraits();
    const name =
      ns.isMemberSchema() && !traits.httpPayload
        ? ns.getMemberTraits().xmlName ?? ns.getMemberName()
        : traits.xmlName ?? ns.getName();

    if (!name || !ns.isStructSchema()) {
      throw new Error(
        `@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(
          true
        )}.`
      );
    }
    const structXmlNode = XmlNode.of(name);

    const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);

    for (const [memberName, memberSchema] of serializingStructIterator(ns, value as any)) {
      const val = (value as any)[memberName];

      if (val != null || memberSchema.isIdempotencyToken()) {
        if (memberSchema.getMergedTraits().xmlAttribute) {
          structXmlNode.addAttribute(
            memberSchema.getMergedTraits().xmlName ?? memberName,
            this.writeSimple(memberSchema, val)
          );
          continue;
        }
        if (memberSchema.isListSchema()) {
          this.writeList(memberSchema, val, structXmlNode, xmlns);
        } else if (memberSchema.isMapSchema()) {
          this.writeMap(memberSchema, val, structXmlNode, xmlns);
        } else if (memberSchema.isStructSchema()) {
          structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
        } else {
          const memberNode = XmlNode.of(memberSchema.getMergedTraits().xmlName ?? memberSchema.getMemberName());
          this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
          structXmlNode.addChildNode(memberNode);
        }
      }
    }

    if (xmlns) {
      structXmlNode.addAttribute(xmlnsAttr as string, xmlns);
    }

    return structXmlNode;
  }

  private writeList(
    listMember: NormalizedSchema,
    array: unknown[],
    container: XmlNode,
    parentXmlns: string | undefined
  ): void {
    if (!listMember.isMemberSchema()) {
      throw new Error(
        `@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`
      );
    }
    const listTraits = listMember.getMergedTraits();
    const listValueSchema = listMember.getValueSchema();
    const listValueTraits = listValueSchema.getMergedTraits();
    const sparse = !!listValueTraits.sparse;
    const flat = !!listTraits.xmlFlattened;

    const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);

    const writeItem = (container: XmlNode, value: any) => {
      if (listValueSchema.isListSchema()) {
        this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container, xmlns);
      } else if (listValueSchema.isMapSchema()) {
        this.writeMap(listValueSchema, value as any, container, xmlns);
      } else if (listValueSchema.isStructSchema()) {
        const struct = this.writeStruct(listValueSchema, value, xmlns);
        container.addChildNode(
          struct.withName(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member")
        );
      } else {
        const listItemNode = XmlNode.of(
          flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member"
        );
        this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
        container.addChildNode(listItemNode);
      }
    };

    if (flat) {
      for (const value of array) {
        if (sparse || value != null) {
          writeItem(container, value);
        }
      }
    } else {
      const listNode = XmlNode.of(listTraits.xmlName ?? listMember.getMemberName());
      if (xmlns) {
        listNode.addAttribute(xmlnsAttr as string, xmlns);
      }
      for (const value of array) {
        if (sparse || value != null) {
          writeItem(listNode, value);
        }
      }
      container.addChildNode(listNode);
    }
  }

  private writeMap(
    mapMember: NormalizedSchema,
    map: Record<string, any>,
    container: XmlNode,
    parentXmlns: string | undefined,
    containerIsMap = false
  ): void {
    if (!mapMember.isMemberSchema()) {
      throw new Error(
        `@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`
      );
    }

    const mapTraits = mapMember.getMergedTraits();

    const mapKeySchema = mapMember.getKeySchema();
    const mapKeyTraits = mapKeySchema.getMergedTraits();
    const keyTag = mapKeyTraits.xmlName ?? "key";

    const mapValueSchema = mapMember.getValueSchema();
    const mapValueTraits = mapValueSchema.getMergedTraits();
    const valueTag = mapValueTraits.xmlName ?? "value";

    const sparse = !!mapValueTraits.sparse;
    const flat = !!mapTraits.xmlFlattened;

    const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);

    const addKeyValue = (entry: XmlNode, key: string, val: any) => {
      const keyNode = XmlNode.of(keyTag, key);
      const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
      if (keyXmlns) {
        keyNode.addAttribute(keyXmlnsAttr as string, keyXmlns);
      }

      entry.addChildNode(keyNode);
      let valueNode = XmlNode.of(valueTag);

      if (mapValueSchema.isListSchema()) {
        this.writeList(mapValueSchema, val, valueNode, xmlns);
      } else if (mapValueSchema.isMapSchema()) {
        this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
      } else if (mapValueSchema.isStructSchema()) {
        valueNode = this.writeStruct(mapValueSchema, val, xmlns);
      } else {
        this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
      }

      entry.addChildNode(valueNode);
    };

    if (flat) {
      for (const [key, val] of Object.entries(map as object)) {
        if (sparse || val != null) {
          const entry = XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
          addKeyValue(entry, key, val);
          container.addChildNode(entry);
        }
      }
    } else {
      let mapNode: XmlNode | undefined;
      if (!containerIsMap) {
        mapNode = XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
        if (xmlns) {
          mapNode.addAttribute(xmlnsAttr as string, xmlns);
        }
        container.addChildNode(mapNode);
      }

      for (const [key, val] of Object.entries(map as object)) {
        if (sparse || val != null) {
          const entry = XmlNode.of("entry");
          addKeyValue(entry, key, val);
          (containerIsMap ? container : mapNode!).addChildNode(entry);
        }
      }
    }
  }

  private writeSimple(_schema: ISchema, value: unknown): string {
    if (null === value) {
      throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
    }
    const ns = NormalizedSchema.of(_schema);
    let nodeContents: any = null;

    if (value && typeof value === "object") {
      if (ns.isBlobSchema()) {
        nodeContents = (this.serdeContext?.base64Encoder ?? toBase64)(value as string | Uint8Array);
      } else if (ns.isTimestampSchema() && value instanceof Date) {
        const format = determineTimestampFormat(ns, this.settings);
        switch (format) {
          case 5 satisfies TimestampDateTimeSchema:
            nodeContents = value.toISOString().replace(".000Z", "Z");
            break;
          case 6 satisfies TimestampHttpDateSchema:
            nodeContents = dateToUtcString(value);
            break;
          case 7 satisfies TimestampEpochSecondsSchema:
            nodeContents = String(value.getTime() / 1000);
            break;
          default:
            console.warn("Missing timestamp format, using http date", value);
            nodeContents = dateToUtcString(value);
            break;
        }
      } else if (ns.isBigDecimalSchema() && value) {
        if (value instanceof NumericValue) {
          return value.string;
        }
        return String(value);
      } else if (ns.isMapSchema() || ns.isListSchema()) {
        throw new Error(
          "@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead."
        );
      } else {
        throw new Error(
          `@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(
            true
          )}`
        );
      }
    }

    if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
      nodeContents = String(value);
    }

    if (ns.isStringSchema()) {
      if (value === undefined && ns.isIdempotencyToken()) {
        nodeContents = generateIdempotencyToken();
      } else {
        nodeContents = String(value);
      }
    }

    if (nodeContents === null) {
      throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
    }

    return nodeContents;
  }

  private writeSimpleInto(_schema: ISchema, value: unknown, into: XmlNode, parentXmlns: string | undefined): void {
    const nodeContents = this.writeSimple(_schema, value);
    const ns = NormalizedSchema.of(_schema);

    const content = new XmlText(nodeContents);
    const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
    if (xmlns) {
      into.addAttribute(xmlnsAttr as string, xmlns);
    }

    into.addChildNode(content);
  }

  private getXmlnsAttribute(ns: NormalizedSchema, parentXmlns: string | undefined): XmlNamespaceAttributeValuePair {
    const traits = ns.getMergedTraits();
    const [prefix, xmlns] = traits.xmlNamespace ?? [];
    if (xmlns && xmlns !== parentXmlns) {
      return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
    }
    return [void 0, void 0];
  }
}
