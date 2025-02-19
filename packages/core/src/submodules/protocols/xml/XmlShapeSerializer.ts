import { XmlNode, XmlText } from "@aws-sdk/xml-builder";
import { NormalizedSchema } from "@smithy/core/schema";
import { dateToUtcString } from "@smithy/smithy-client";
import type { Schema as ISchema, SerdeContext, ShapeSerializer } from "@smithy/types";

export class XmlShapeSerializer implements ShapeSerializer<string> {
  private buffer?: XmlNode;
  private serdeContext?: SerdeContext;

  public constructor(public readonly xmlNamespace: string, public readonly timestampFormat: string = "time") {}

  public setSerdeContext(serdeContext: SerdeContext) {
    this.serdeContext = serdeContext;
  }

  public write(schema: ISchema, value: unknown): void {
    const node = this._write(schema, value) as XmlNode;
    this.buffer = node;
  }

  public flush(): string {
    const buffer = this.buffer!;
    if (this.xmlNamespace) {
      buffer.addAttribute("xmlns", this.xmlNamespace);
    }
    return buffer.toString();
  }

  private _write(_schema: ISchema, value: unknown): XmlNode | string {
    if (null === value) {
      throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
    }
    const ns = NormalizedSchema.of(_schema);

    if (typeof value === "object") {
      if (value instanceof Date) {
        return dateToUtcString(value);
      }
      return this.writeStructOrMap(ns, value);
    }

    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }

    const schema = ns.getSchema();
    throw new Error(`Unhandled schema-value pair ${schema?.constructor?.name} ${value}`);
  }

  private writeStructOrMap(ns: NormalizedSchema, value: unknown): XmlNode {
    const traits = ns.getMergedTraits();
    const name = traits.xmlName ?? ns.getName() ?? "Unknown";
    const node = XmlNode.of(name);
    const sparse = !!traits.sparse;

    if (ns.isMapSchema()) {
      this.writeMap(ns, value as Record<string, any>, node);
    } else {
      for (const [key, val] of Object.entries(value as object)) {
        const memberSchema = ns.getMemberSchema(key);
        const memberSchemaTraits = memberSchema.getMergedTraits();
        const itemName = memberSchemaTraits.xmlName ?? memberSchema.getName() ?? key ?? "UnknownItem";

        if (sparse || val != null) {
          if (Array.isArray(val)) {
            this.writeList(memberSchema, val, node);
          } else {
            const contents = this._write(memberSchema.getSchema(), val);
            this.writeChild(node, contents, itemName);
          }
        }
      }
    }

    return node;
  }

  private writeMap(ns: NormalizedSchema, map: Record<string, any>, container: XmlNode): void {
    const mapTraits = ns.getMergedTraits();
    const memberSchema = ns.getMemberSchema();
    const memberSchemaTraits = memberSchema.getMergedTraits();
    const itemName = mapTraits.xmlName ?? memberSchemaTraits.xmlName ?? memberSchema.getName() ?? "UnknownMapItem";
    const sparse = !!memberSchemaTraits.sparse;
    const flat = !!mapTraits.xmlFlattened;

    for (const [key, val] of Object.entries(map as object)) {
      if (sparse || val != null) {
        const attachTo = flat ? container : XmlNode.of(itemName);

        const entry = XmlNode.of(flat ? itemName : "entry");
        entry.addChildNode(new XmlText(key));
        const valueNode = XmlNode.of("value");
        entry.addChildNode(valueNode);
        if (Array.isArray(val)) {
          this.writeList(memberSchema, val, valueNode);
        } else {
          const contents = this._write(memberSchema.getSchema(), val);
          this.writeChild(valueNode, contents, itemName);
        }

        attachTo.addChildNode(entry);
      }
    }
  }

  private writeList(ns: NormalizedSchema, array: unknown[], container: XmlNode): void {
    const listTraits = ns.getMergedTraits();
    const memberSchema = ns.getMemberSchema();
    const memberSchemaTraits = memberSchema.getMergedTraits();
    const itemName = listTraits.xmlName ?? memberSchemaTraits.xmlName ?? memberSchema.getName() ?? "UnknownListItem";
    const sparse = !!memberSchemaTraits.sparse;
    const flat = !!listTraits.xmlFlattened;

    if (flat) {
      const nodes = [] as (string | XmlNode)[];
      for (const value of array) {
        if (sparse || value != null) {
          const item = this._write(memberSchema.getSchema(), value);
          nodes.push(item);
        }
      }
      this.writeChild(container, nodes, itemName);
    } else {
      const listNode = XmlNode.of(ns.getName() ?? listTraits.xmlName ?? "UnknownList");
      for (const value of array) {
        if (sparse || value != null) {
          const item = this._write(memberSchema.getSchema(), value);
          this.writeChild(listNode, item, itemName);
        }
      }
      container.addChildNode(listNode);
    }
  }

  private writeChild(parent: XmlNode, content: string | XmlNode | (string | XmlNode)[], itemName: string) {
    if (Array.isArray(content)) {
      content.forEach((c) => this.writeChild(parent, c, itemName));
      return;
    }
    if (typeof content === "string") {
      parent.addChildNode(XmlNode.of(itemName, content));
    } else {
      content.withName(itemName);
      parent.addChildNode(content);
    }
  }
}
