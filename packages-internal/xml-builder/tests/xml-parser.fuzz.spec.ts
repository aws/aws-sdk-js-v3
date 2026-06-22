import fc from "fast-check";
import { XMLParser } from "fast-xml-parser";
import { describe, expect, it } from "vitest";

import { parseXML } from "../src/xml-parser";

/**
 * Reference implementation used from 2020–2026 in the AWS SDK.
 */
const fxpParser = new XMLParser({
  attributeNamePrefix: "",
  processEntities: {
    enabled: true,
    maxTotalExpansions: Infinity,
  },
  htmlEntities: true,
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
  maxNestedTags: Infinity,
});

function fxp(xml: string): any {
  return fxpParser.parse(xml, true);
}

// --- Arbitraries for generating XML structures ---

/** Safe XML tag name (letter followed by alphanumeric/dash/underscore). */
const tagName = fc
  .tuple(
    fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz".split("")),
    fc.string({
      unit: fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789".split("")),
      minLength: 0,
      maxLength: 8,
    })
  )
  .map(([first, rest]) => first + rest);

/** Text content safe for XML (no < or & unescaped). */
const textContent = fc.string({
  unit: fc.oneof(
    fc.constantFrom(
      ..."abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()_+-=[]{}|;:',./?\t\n\r".split("")
    ),
    fc.constant("&amp;"),
    fc.constant("&lt;"),
    fc.constant("&gt;"),
    fc.constant("&quot;"),
    fc.constant("&apos;")
  ),
  minLength: 0,
  maxLength: 50,
});

/** Generate a well-formed XML element (recursive). */
const xmlElement: fc.Arbitrary<string> = fc.letrec((tie) => ({
  element: fc.oneof(
    { depthSize: "small" },
    // Text element
    fc.tuple(tagName, textContent).map(([tag, text]) => `<${tag}>${text}</${tag}>`),
    // Self-closing
    tagName.map((tag) => `<${tag}/>`),
    // Empty element
    tagName.map((tag) => `<${tag}></${tag}>`),
    // Element with attribute
    fc
      .tuple(tagName, tagName, textContent, textContent)
      .map(([tag, attr, attrVal, text]) => `<${tag} ${attr}="${attrVal.replace(/"/g, "&quot;")}">${text}</${tag}>`),
    // Nested elements
    fc
      .tuple(tagName, fc.array(tie("element") as fc.Arbitrary<string>, { minLength: 1, maxLength: 4 }))
      .map(([tag, children]) => `<${tag}>${children.join("")}</${tag}>`)
  ),
})).element;

/** Generate a complete well-formed XML document. */
const xmlDocument = fc
  .tuple(
    fc.boolean(), // include xml declaration?
    xmlElement
  )
  .map(([decl, root]) => (decl ? `<?xml version="1.0" encoding="UTF-8"?>${root}` : root));

describe("xml-parser fuzz testing", () => {
  it("should never crash on arbitrary strings", { timeout: 60_000 }, () => {
    fc.assert(
      fc.property(fc.string({ unit: "grapheme-composite", minLength: 0, maxLength: 500 }), (input) => {
        try {
          parseXML(input);
        } catch (e: any) {
          // Errors are acceptable — crashes/hangs are not.
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toContain("@aws-sdk XML parse error");
        }
      }),
      { numRuns: 10_000 }
    );
  });

  it("should match fast-xml-parser on well-formed XML", { timeout: 60_000 }, () => {
    fc.assert(
      fc.property(xmlDocument, (xml) => {
        const custom = parseXML(xml);
        const reference = fxp(xml);
        expect(custom).toEqual(reference);
      }),
      { numRuns: 10_000 }
    );
  });

  it("should not hang on pathological inputs (deeply nested)", { timeout: 30_000 }, () => {
    fc.assert(
      fc.property(fc.integer({ min: 50, max: 500 }), (depth) => {
        const open = Array.from({ length: depth }, (_, i) => `<t${i}>`).join("");
        const close = Array.from({ length: depth }, (_, i) => `</t${depth - 1 - i}>`).join("");
        const xml = open + "x" + close;
        const result = parseXML(xml);
        expect(result).toBeDefined();
      }),
      { numRuns: 100 }
    );
  });

  it("should not hang on repeated entity-like patterns", { timeout: 30_000 }, () => {
    fc.assert(
      fc.property(
        fc.tuple(
          fc.integer({ min: 100, max: 5000 }),
          fc.string({ unit: fc.constantFrom(..."abcdefg&;#x0123456789".split("")), minLength: 1, maxLength: 20 })
        ),
        ([count, pattern]) => {
          const xml = `<r>${pattern.repeat(count)}</r>`;
          try {
            parseXML(xml);
          } catch (e: any) {
            expect(e).toBeInstanceOf(Error);
          }
        }
      ),
      { numRuns: 500 }
    );
  });

  it("should handle random byte sequences as text content without crashing", { timeout: 30_000 }, () => {
    fc.assert(
      fc.property(fc.tuple(tagName, fc.uint8Array({ minLength: 0, maxLength: 200 })), ([tag, bytes]) => {
        const text = Array.from(bytes)
          .map((b) => `&#x${b.toString(16)};`)
          .join("");
        const xml = `<${tag}>${text}</${tag}>`;
        const result = parseXML(xml);
        expect(result).toBeDefined();
        expect(result[tag]).toBeDefined();
      }),
      { numRuns: 2_000 }
    );
  });

  it("should handle duplicate sibling tags consistently with reference", { timeout: 30_000 }, () => {
    fc.assert(
      fc.property(
        fc.tuple(tagName, tagName, fc.array(textContent, { minLength: 1, maxLength: 10 })),
        ([root, child, values]) => {
          const children = values.map((v) => `<${child}>${v}</${child}>`).join("");
          const xml = `<${root}>${children}</${root}>`;
          expect(parseXML(xml)).toEqual(fxp(xml));
        }
      ),
      { numRuns: 5_000 }
    );
  });

  it("should reject malformed XML with a clean error", { timeout: 30_000 }, () => {
    const malformedXml = fc.oneof(
      // Unclosed tag
      tagName.map((t) => `<${t}>`),
      // Mismatched tags
      fc
        .tuple(tagName, tagName)
        .filter(([a, b]) => a !== b)
        .map(([a, b]) => `<${a}></${b}>`),
      // Missing closing >
      tagName.map((t) => `<${t}`),
      // Double opening
      tagName.map((t) => `<<${t}>x</${t}>`),
      // Just text
      textContent.filter((t) => t.length > 0 && !t.includes("<"))
    );

    fc.assert(
      fc.property(malformedXml, (xml) => {
        expect(() => parseXML(xml)).toThrowError();
      }),
      { numRuns: 5_000 }
    );
  });
});
