/* eslint-disable @typescript-eslint/no-this-alias */

/**
 * AWS SDK XML to object converter.
 * @internal
 */
export function parseXML(xml: string): any {
  const state = new AwsXmlParser(xml);
  return state.parse();
}

/**
 * @internal
 */
class AwsXmlParser {
  private i = 0;
  private readonly z: number;

  public constructor(private readonly x: string) {
    this.z = x.length;
  }

  public parse(): any {
    const p = this;
    const { z } = p;

    while (p.i < z) {
      p.trim();
      if (p.i >= z) {
        break;
      }
      if (p.isNext("<?")) {
        p.readTo("?>");
        p.trim();
      } else if (p.isNext("<!--")) {
        p.readTo("-->");
        p.trim();
      } else if (p.isNext("<!DOCTYPE", false)) {
        p.skipDoctype();
        p.trim();
      } else if (p.x[p.i] === "<") {
        const root = p.parseTag();
        return { [root.tag]: root.value };
      } else {
        throw new Error("@aws-sdk XML parse error: unexpected content.");
      }
    }

    throw new Error("@aws-sdk XML parse error: no root element.");
  }

  /**
   * @returns whether the cursor is at the given string.
   */
  private isNext(s: string, caseSensitive = true): boolean {
    const p = this;
    if (caseSensitive) {
      return p.x.startsWith(s, p.i);
    }
    // this is slow, use sparingly.
    return p.x.toLowerCase().startsWith(s.toLowerCase(), p.i);
  }

  /**
   * Reads up to the stop string and returns the intermediate.
   */
  private readTo(stop: string): string {
    const p = this;
    const _i = p.x.indexOf(stop, p.i);
    if (_i === -1) {
      throw new Error(`@aws-sdk XML parse error: expected "${stop}" not found.`);
    }
    const result = p.x.slice(p.i, _i);
    p.i = _i + stop.length;
    return result;
  }

  /**
   * Scan forward over whitespace.
   */
  private trim(): void {
    const p = this;
    while (p.i < p.z && " \t\r\n".includes(p.x[p.i])) {
      ++p.i;
    }
  }

  /**
   * @returns contents of an XML attribute.
   */
  private readAttrValue(): string {
    const p = this;
    const quote = p.x[p.i];
    ++p.i; // "

    let value = "";

    while (p.i < p.z && p.x[p.i] !== quote) {
      value += p.x[p.i++];
    }

    ++p.i; // "
    return p.decodeEntities(value);
  }

  /**
   * The main course.
   */
  private parseTag(): { tag: string; value: any } {
    const p = this;
    ++p.i; // <

    let tag = "";

    // read tag name.
    while (p.i < p.z && !" \t\r\n>/".includes(p.x[p.i])) {
      tag += p.x[p.i++];
    }

    let hasAttrs = false;
    const attrs: Record<string, string> = {};

    // attributes.
    while (p.i < p.z) {
      p.trim();
      if (">/".includes(p.x[p.i])) {
        break;
      }
      let name = "";
      while (p.i < p.z && !"= \t\r\n>/?".includes(p.x[p.i])) {
        name += p.x[p.i++];
      }
      p.trim();
      if (p.x[p.i] !== "=") {
        break;
      }
      ++p.i; // =
      p.trim();
      attrs[name] = p.readAttrValue();
      hasAttrs = true;
    }

    if (p.i >= p.z) {
      throw new Error("@aws-sdk XML parse error: unexpected end of input.");
    }

    if (p.x[p.i] === "/") {
      // self-closed after attributes.
      ++p.i; // /

      if (p.i >= p.z || p.x[p.i] !== ">") {
        throw new Error("@aws-sdk XML parse error: expected > at the end of self-closing tag.");
      }

      ++p.i; // >
      return { tag, value: hasAttrs ? { ...attrs } : "" };
    }

    if (p.x[p.i] !== ">") {
      throw new Error("@aws-sdk XML parse error: expected > at the end of opening tag.");
    }
    ++p.i; // >

    const textParts: string[] = [];
    const childTags: { tag: string; value: any }[] = [];
    let hasElementChild = false;

    // read children.
    while (p.i < p.z) {
      if (p.isNext("</")) {
        break;
      }

      if (p.x[p.i] === "<") {
        // read element.

        if (p.isNext("<!--")) {
          p.readTo("-->");
        } else if (p.isNext("<![CDATA[")) {
          p.i += 9; // <![CDATA[
          textParts.push(p.readTo("]]>"));
        } else if (p.isNext("<?")) {
          p.readTo("?>");
        } else {
          hasElementChild = true;
          childTags.push(p.parseTag());
        }
      } else {
        // read text.

        let text = "";
        while (p.i < p.z && p.x[p.i] !== "<") {
          text += p.x[p.i++];
        }
        textParts.push(p.decodeEntities(text));
      }
    }

    // close.
    if (!p.isNext("</")) {
      throw new Error(`@aws-sdk XML parse error: missing closing tag </${tag}>.`);
    }
    p.i += 2; // </

    const closeTag = p.readTo(">").trim();
    if (closeTag !== tag) {
      throw new Error(`@aws-sdk XML parse error: mismatched tags <${tag}> and </${closeTag}>.`);
    }

    if (!hasAttrs && textParts.length === 0 && !hasElementChild) {
      // empty element.
      return { tag, value: "" };
    }

    if (!hasAttrs && !hasElementChild) {
      // text element.
      const text = textParts.length === 1 ? textParts[0] : textParts.join("");
      if (text.trim() === "" && text.includes("\n")) {
        return { tag, value: "" };
      }
      return { tag, value: text };
    }

    const obj: any = {};

    for (const text of textParts) {
      if (text.trim() === "" && text.includes("\n")) {
        continue;
      }
      // #text is the text node name expected in XMLShapeDeserializer.
      obj["#text"] = "#text" in obj ? obj["#text"] + text : text;
    }

    for (const child of childTags) {
      if (child.tag in obj) {
        if (Array.isArray(obj[child.tag])) {
          obj[child.tag].push(child.value);
        } else {
          // convert from object into array upon seeing 2 items.
          // single item lists are not wrapped in an Array, because
          // that is handled by the schema-based ShapeDeserializer.
          obj[child.tag] = [obj[child.tag], child.value];
        }
      } else {
        obj[child.tag] = child.value;
      }
    }

    // Add attributes after children (fxp puts attrs after children)
    for (const [k, v] of Object.entries(attrs)) {
      obj[k] = v;
    }

    return { tag, value: obj };
  }

  private static readonly ENTITIES: Record<string, string> = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
  };

  /**
   * Skip a !DOCTYPE block, including internal subsets in [ ].
   */
  private skipDoctype(): void {
    const p = this;
    p.i += 9; // <!DOCTYPE
    let depth = 0;
    while (p.i < p.z) {
      const c = p.x[p.i];
      if (c === "[") {
        ++depth;
      } else if (c === "]") {
        --depth;
      } else if (c === ">" && depth === 0) {
        ++p.i;
        return;
      }
      ++p.i;
    }
    throw new Error("@aws-sdk XML parse error: unclosed DOCTYPE.");
  }

  private decodeEntities(s: string): string {
    return s.replace(/&(?:#x([0-9a-fA-F]{1,6})|#(\d{1,7})|([a-zA-Z][a-zA-Z0-9]{0,30}));/g, (_, hex, dec, named) => {
      if (hex) {
        return String.fromCharCode(parseInt(hex, 16));
      }
      if (dec) {
        return String.fromCharCode(parseInt(dec, 10));
      }
      return AwsXmlParser.ENTITIES[named] ?? "";
    });
  }
}
