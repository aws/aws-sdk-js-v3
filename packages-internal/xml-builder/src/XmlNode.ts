import { escapeAttribute } from "./escape-attribute";
import { Stringable } from "./stringable";
import { XmlText } from "./XmlText";

/**
 * @internal
 *
 * Represents an XML node.
 */
export class XmlNode {
  private attributes: Record<string, any> = {};

  public static of(name: string, childText?: string, withName?: string): XmlNode {
    const node = new XmlNode(name);
    if (childText !== undefined) {
      node.addChildNode(new XmlText(childText));
    }
    if (withName !== undefined) {
      node.withName(withName);
    }
    return node;
  }

  public constructor(private name: string, public readonly children: Stringable[] = []) {}

  public withName(name: string): XmlNode {
    this.name = name;
    return this;
  }

  public addAttribute(name: string, value: any): XmlNode {
    this.attributes[name] = value;
    return this;
  }

  public addChildNode(child: Stringable): XmlNode {
    this.children.push(child);
    return this;
  }

  public removeAttribute(name: string): XmlNode {
    delete this.attributes[name];
    return this;
  }

  /**
   * @internal
   * Alias of {@link XmlNode#withName(string)} for codegen brevity.
   */
  public n(name: string): XmlNode {
    this.name = name;
    return this;
  }

  /**
   * @internal
   * Alias of {@link XmlNode#addChildNode(string)} for codegen brevity.
   */
  public c(child: Stringable): XmlNode {
    this.children.push(child);
    return this;
  }

  /**
   * @internal
   * Checked version of {@link XmlNode#addAttribute(string)} for codegen brevity.
   */
  public a(name: string, value: any): XmlNode {
    if (value != null) {
      this.attributes[name] = value;
    }
    return this;
  }

  /**
   * Create a child node.
   * Used in serialization of string fields.
   * @internal
   */
  public cc(input: any, field: string, withName: string = field): void {
    if (input[field] != null) {
      const node = XmlNode.of(field, input[field]).withName(withName);
      this.c(node);
    }
  }

  /**
   * Creates list child nodes.
   * @internal
   */
  public l(input: any, listName: string, memberName: string, valueProvider: Function): void {
    if (input[listName] != null) {
      const nodes = valueProvider();
      nodes.map((node: any) => {
        node.withName(memberName);
        this.c(node);
      });
    }
  }

  /**
   * Creates list child nodes with container.
   * @internal
   */
  public lc(input: any, listName: string, memberName: string, valueProvider: Function): void {
    if (input[listName] != null) {
      const nodes = valueProvider();
      const containerNode = new XmlNode(memberName);
      nodes.map((node: any) => {
        containerNode.c(node);
      });
      this.c(containerNode);
    }
  }

  public toString(): string {
    const hasChildren = Boolean(this.children.length);
    let xmlText = `<${this.name}`;
    // add attributes
    const attributes = this.attributes;
    for (const attributeName of Object.keys(attributes)) {
      const attribute = attributes[attributeName];
      if (attribute != null) {
        xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
      }
    }

    return (xmlText += !hasChildren ? "/>" : `>${this.children.map((c) => c.toString()).join("")}</${this.name}>`);
  }
}
