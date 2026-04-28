/**
 * EntityDecoder test suite — adapted from @nodable/entities reference tests.
 * https://github.com/nodable/val-parsers/blob/main/Entity/specs/EntityDecoder.test.js
 */
import { describe, expect, test as it } from "vitest";

import {
  type EntityDecoder as EntityDecoderType,
  COMMON_HTML,
  CURRENCY,
  EntityDecoderImpl as EntityDecoder,
  XML as XML_ENTITIES,
} from "./nodable_entities";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function make(opts: any): EntityDecoderType {
  return new EntityDecoder(opts);
}

// ---------------------------------------------------------------------------
// 1. Fast path
// ---------------------------------------------------------------------------
describe("fast path — no & in string", () => {
  const r = make({});

  it("returns same reference when no & present", () => {
    const s = "hello world";
    expect(r.decode(s)).toBe(s);
  });

  it("returns empty string unchanged", () => {
    expect(r.decode("")).toBe("");
  });

  it("handles non-string input gracefully", () => {
    expect(r.decode(null as any)).toBe(null);
    expect(r.decode(undefined as any)).toBe(undefined);
    expect(r.decode(42 as any)).toBe(42);
  });
});

// ---------------------------------------------------------------------------
// 2. Built-in XML entities (always active via XML_ENTITIES in base map)
// ---------------------------------------------------------------------------
describe("built-in XML entities", () => {
  const r = make({});

  it("replaces &lt;", () => expect(r.decode("&lt;")).toBe("<"));
  it("replaces &gt;", () => expect(r.decode("&gt;")).toBe(">"));
  it("replaces &quot;", () => expect(r.decode("&quot;")).toBe('"'));
  it("replaces &apos;", () => expect(r.decode("&apos;")).toBe("'"));
  it("replaces &amp;", () => expect(r.decode("&amp;")).toBe("&"));

  it("replaces multiple in one string", () => {
    expect(r.decode("a &lt; b &gt; c")).toBe("a < b > c");
  });

  it("&amp;lt; does not double-expand — single pass resolves left-to-right", () => {
    expect(r.decode("&amp;lt;")).toBe("&lt;");
  });

  it("&amp;amp; resolves to &amp;, not &", () => {
    expect(r.decode("&amp;amp;")).toBe("&amp;");
  });

  it("decimal numeric ref &#60; → <", () => {
    expect(r.decode("&#60;")).toBe("<");
  });

  it("hex numeric ref &#x3E; → >", () => {
    expect(r.decode("&#x3E;")).toBe(">");
  });

  it("decimal numeric ref left unchanged when numericAllowed: false", () => {
    const r2 = make({ numericAllowed: false });
    expect(r2.decode("&#60;")).toBe("&#60;");
  });

  it("hex numeric ref left unchanged when numericAllowed: false", () => {
    const r2 = make({ numericAllowed: false });
    expect(r2.decode("&#x3E;")).toBe("&#x3E;");
  });
});

// ---------------------------------------------------------------------------
// 3. namedEntities — extending the base map
// ---------------------------------------------------------------------------
describe("namedEntities option", () => {
  it("entities in namedEntities are resolved", () => {
    const r = make({ namedEntities: { foo: "BAR" } });
    expect(r.decode("&foo;")).toBe("BAR");
  });

  it("XML_ENTITIES remain active when namedEntities is set", () => {
    const r = make({ namedEntities: { foo: "BAR" } });
    expect(r.decode("&lt;")).toBe("<");
  });

  it("namedEntities can override XML_ENTITIES", () => {
    const r = make({ namedEntities: { lt: "LESSTHAN" } });
    expect(r.decode("&lt;")).toBe("LESSTHAN");
  });

  it("accepts legacy { regex, val } objects in namedEntities", () => {
    const r = make({ namedEntities: { br: { regex: /&br;/g, val: "\n" } } });
    expect(r.decode("line1&br;line2")).toBe("line1\nline2");
  });
});

// ---------------------------------------------------------------------------
// 4. Named entity groups via namedEntities
// ---------------------------------------------------------------------------
describe("COMMON_HTML group", () => {
  const r = make({ namedEntities: COMMON_HTML });

  it("&nbsp;", () => expect(r.decode("&nbsp;")).toBe("\u00a0"));
  it("&copy;", () => expect(r.decode("&copy;")).toBe("\u00a9"));
  it("&reg;", () => expect(r.decode("&reg;")).toBe("\u00ae"));
  it("&trade;", () => expect(r.decode("&trade;")).toBe("\u2122"));
  it("&mdash;", () => expect(r.decode("&mdash;")).toBe("\u2014"));
  it("&ndash;", () => expect(r.decode("&ndash;")).toBe("\u2013"));
  it("&hellip;", () => expect(r.decode("&hellip;")).toBe("\u2026"));
});

describe("CURRENCY group", () => {
  const r = make({ namedEntities: CURRENCY });

  it("&cent;", () => expect(r.decode("&cent;")).toBe("\u00a2"));
  it("&pound;", () => expect(r.decode("&pound;")).toBe("\u00a3"));
  it("&yen;", () => expect(r.decode("&yen;")).toBe("\u00a5"));
  it("&euro;", () => expect(r.decode("&euro;")).toBe("\u20ac"));
  it("&inr;", () => expect(r.decode("&inr;")).toBe("\u20b9"));
});

describe("numeric references — native resolution", () => {
  const r = make({});

  it("decimal &#65; → A", () => expect(r.decode("&#65;")).toBe("A"));
  it("decimal with leading zeros &#0065; → A", () => expect(r.decode("&#0065;")).toBe("A"));
  it("hex &#x41; → A", () => expect(r.decode("&#x41;")).toBe("A"));
  it("hex uppercase &#X41; → A (x is case-insensitive)", () => {
    expect(r.decode("&#X41;")).toBe("A");
  });
  it("emoji via decimal &#128512;", () => expect(r.decode("&#128512;")).toBe("😀"));
  it("emoji via hex &#x1F600;", () => expect(r.decode("&#x1F600;")).toBe("😀"));
  it("decimal with many leading zeros &#00065;", () => expect(r.decode("&#00065;")).toBe("A"));
  it("hex with leading zeros &#x00041;", () => expect(r.decode("&#x00041;")).toBe("A"));
});

describe("composed namedEntities groups", () => {
  const r = make({ namedEntities: { ...COMMON_HTML, ...CURRENCY } });

  it("both groups active", () => {
    expect(r.decode("&copy; &euro;")).toBe("\u00a9 \u20ac");
  });
});

// ---------------------------------------------------------------------------
// 5. External entities — persistent and input/runtime
// ---------------------------------------------------------------------------
describe("persistent external entities (setExternalEntities)", () => {
  it("basic persistent entity", () => {
    const r = make({});
    r.setExternalEntities({ foo: "bar" });
    expect(r.decode("&foo;")).toBe("bar");
  });

  it("numeric persistent entity throws", () => {
    const r = make({});
    expect(() => r.setExternalEntities({ "#xD": "bar" })).toThrow();
  });

  it("multiple persistent entities", () => {
    const r = make({});
    r.setExternalEntities({ foo: "FOO", baz: "BAZ" });
    expect(r.decode("&foo; and &baz;")).toBe("FOO and BAZ");
  });

  it("entity name with dot is accepted", () => {
    const r = make({});
    r.setExternalEntities({ "my.entity": "VALUE" });
    expect(r.decode("&my.entity;")).toBe("VALUE");
  });

  it("accepts pre-built { regex, val } objects", () => {
    const r = make({});
    r.setExternalEntities({ custom: { regex: /&custom;/g, val: "CUSTOM_VALUE" } });
    expect(r.decode("&custom;")).toBe("CUSTOM_VALUE");
  });

  it("throws on invalid entity name character", () => {
    const r = make({});
    expect(() => r.setExternalEntities({ "bad&name": "x" })).toThrow();
  });

  it("addExternalEntity appends without wiping existing entries", () => {
    const r = make({});
    r.setExternalEntities({ a: "AAA" });
    r.addExternalEntity("b", "BBB");
    expect(r.decode("&a; &b;")).toBe("AAA BBB");
  });

  it("persistent entities survive reset()", () => {
    const r = make({});
    r.setExternalEntities({ brand: "Acme" });
    r.reset();
    expect(r.decode("&brand;")).toBe("Acme");
  });
});

describe("input / runtime entities (addInputEntities)", () => {
  it("basic input entity", () => {
    const r = make({});
    r.addInputEntities({ foo: "bar" });
    expect(r.decode("&foo;")).toBe("bar");
  });

  it("accepts DocTypeReader { regx, val } objects", () => {
    const r = make({});
    r.addInputEntities({ ent: { regx: /&ent;/g, val: "RESOLVED" } });
    expect(r.decode("&ent;")).toBe("RESOLVED");
  });

  it("addInputEntities resets counters", () => {
    const r = make({ limit: { maxTotalExpansions: 5, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "X" });
    r.decode("&x;&x;&x;"); // 3 expansions
    r.addInputEntities({ x: "X" }); // resets counter
    expect(() => r.decode("&x;&x;&x;&x;&x;")).not.toThrow(); // exactly 5 — ok
  });

  it("reset() wipes input entities", () => {
    const r = make({});
    r.addInputEntities({ docEnt: "VALUE" });
    expect(r.decode("&docEnt;")).toBe("VALUE");
    r.reset();
    expect(r.decode("&docEnt;")).toBe("&docEnt;");
  });

  it("input entities do not bleed across documents", () => {
    const r = make({});
    r.addInputEntities({ tmp: "DOC1" });
    r.reset();
    expect(r.decode("&tmp;")).toBe("&tmp;");
  });
});

describe("entity priority order", () => {
  it("input beats external when both define the same name", () => {
    const r = make({});
    r.setExternalEntities({ ent: "EXTERNAL" });
    r.addInputEntities({ ent: "INPUT" });
    expect(r.decode("&ent;")).toBe("INPUT");
  });

  it("external beats base when both define the same name", () => {
    const r = make({});
    r.setExternalEntities({ lt: "LESSTHAN" });
    expect(r.decode("&lt;")).toBe("LESSTHAN");
  });

  it("base is used when neither input nor external defines the name", () => {
    const r = make({});
    expect(r.decode("&lt;")).toBe("<");
  });
});

// ---------------------------------------------------------------------------
// 6. Security limits
// ---------------------------------------------------------------------------
describe("maxTotalExpansions", () => {
  it("throws when limit exceeded (external tier)", () => {
    const r = make({ limit: { maxTotalExpansions: 3, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "X" });
    expect(() => r.decode("&x;&x;&x;&x;")).toThrow(/expansion count limit/);
  });

  it("does not throw when exactly at limit", () => {
    const r = make({ limit: { maxTotalExpansions: 3, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "X" });
    expect(() => r.decode("&x;&x;&x;")).not.toThrow();
  });

  it("0 = unlimited", () => {
    const r = make({ limit: { maxTotalExpansions: 0, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "X" });
    const big = "&x;".repeat(10_000);
    expect(() => r.decode(big)).not.toThrow();
  });

  it("Infinity = unlimited", () => {
    const r = make({ limit: { maxTotalExpansions: Infinity, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "X" });
    const big = "&x;".repeat(10_000);
    expect(() => r.decode(big)).not.toThrow();
  });

  it("base entities not tracked when applyLimitsTo: external", () => {
    const r = make({ limit: { maxTotalExpansions: 1, applyLimitsTo: "external" } });
    expect(() => r.decode("&lt;&gt;&lt;&gt;&lt;&gt;")).not.toThrow();
  });

  it("base entities tracked when applyLimitsTo: base", () => {
    const r = make({ limit: { maxTotalExpansions: 2, applyLimitsTo: "base" } });
    expect(() => r.decode("&lt;&gt;&lt;")).toThrow(/expansion count limit/);
  });

  it("base entities tracked when applyLimitsTo: all", () => {
    const r = make({ limit: { maxTotalExpansions: 2, applyLimitsTo: "all" } });
    expect(() => r.decode("&lt;&gt;&lt;")).toThrow(/expansion count limit/);
  });

  it("namedEntities group tracked when applyLimitsTo: base", () => {
    const r = make({
      namedEntities: COMMON_HTML,
      limit: { maxTotalExpansions: 2, applyLimitsTo: "base" },
    });
    expect(() => r.decode("&copy;&copy;&copy;")).toThrow(/expansion count limit/);
  });
});

describe("maxExpandedLength", () => {
  it("throws when expanded length exceeded", () => {
    const r = make({ limit: { maxExpandedLength: 5, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "XXXXXXXXXX" });
    expect(() => r.decode("&x;")).toThrow(/length limit/);
  });

  it("does not throw when exactly at limit", () => {
    const r = make({ limit: { maxExpandedLength: 5, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "XXXXXXXX" });
    expect(() => r.decode("&x;")).not.toThrow();
  });

  it("cumulative across multiple replacements", () => {
    const r = make({ limit: { maxExpandedLength: 10, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "XXXXX" });
    expect(() => r.decode("&x;&x;")).not.toThrow();
  });
});

describe("applyLimitsTo: array", () => {
  it("limits both external and base when both specified", () => {
    const r = make({
      namedEntities: COMMON_HTML,
      limit: { maxTotalExpansions: 1, applyLimitsTo: ["external", "base"] },
    });
    r.addInputEntities({ x: "X" });
    expect(() => r.decode("&x;&copy;")).toThrow(/expansion count limit/);
  });
});

// ---------------------------------------------------------------------------
// 7. postCheck hook
// ---------------------------------------------------------------------------
describe("postCheck", () => {
  it("called with resolved and original", () => {
    let args: { resolved: string; original: string } | undefined;
    const r = make({
      postCheck: (resolved: string, original: string) => {
        args = { resolved, original };
        return resolved;
      },
    });
    r.decode("&lt;");
    expect(args!.original).toBe("&lt;");
    expect(args!.resolved).toBe("<");
  });

  it("returning original rejects expansion", () => {
    const r = make({
      postCheck: (resolved: string, original: string) => (/</.test(resolved) ? original : resolved),
    });
    expect(r.decode("&lt;")).toBe("&lt;"); // rejected
    expect(r.decode("&amp;")).toBe("&"); // allowed
  });

  it("can sanitize resolved string", () => {
    const r = make({
      postCheck: (resolved: string) => {
        expect(resolved).toBe("hello <script>");
        return "hello ";
      },
    });
    expect(r.decode("hello &lt;script&gt;")).toBe("hello ");
  });
});

// ---------------------------------------------------------------------------
// 8. reset()
// ---------------------------------------------------------------------------
describe("reset()", () => {
  it("clears input entities", () => {
    const r = make({});
    r.addInputEntities({ tmp: "DOC1" });
    r.reset();
    expect(r.decode("&tmp;")).toBe("&tmp;");
  });

  it("resets totalExpansions counter", () => {
    const r = make({ limit: { maxTotalExpansions: 2, applyLimitsTo: "external" } });
    r.addInputEntities({ x: "X" });
    r.decode("&x;&x;"); // exhaust counter
    r.reset();
    r.addInputEntities({ x: "X" });
    expect(() => r.decode("&x;&x;")).not.toThrow();
  });

  it("does NOT clear persistent external entities", () => {
    const r = make({});
    r.setExternalEntities({ brand: "Acme" });
    r.reset();
    expect(r.decode("&brand;")).toBe("Acme");
  });
});

// ---------------------------------------------------------------------------
// 9. Edge cases
// ---------------------------------------------------------------------------
describe("edge cases", () => {
  it("unknown entity is left unchanged", () => {
    const r = make({});
    expect(r.decode("&unknown;")).toBe("&unknown;");
  });

  it("partial entity ref without closing ; is left unchanged", () => {
    const r = make({});
    expect(r.decode("&lt")).toBe("&lt");
  });

  it("entity at start of string", () => {
    const r = make({});
    expect(r.decode("&lt;hello")).toBe("<hello");
  });

  it("entity at end of string", () => {
    const r = make({});
    expect(r.decode("hello&gt;")).toBe("hello>");
  });

  it("consecutive entities with no whitespace", () => {
    const r = make({});
    expect(r.decode("&lt;&gt;")).toBe("<>");
  });

  it("very long string with no entities — same reference returned", () => {
    const r = make({});
    const s = "a".repeat(100_000);
    expect(r.decode(s)).toBe(s);
  });

  it("lone & with no token is left unchanged", () => {
    const r = make({});
    expect(r.decode("& ")).toBe("& ");
  });

  it("numeric refs with leading zeros", () => {
    const r = make({});
    expect(r.decode("&#00065;")).toBe("A");
    expect(r.decode("&#x00041;")).toBe("A");
  });

  it("out-of-range numeric ref is left unchanged", () => {
    const r = make({});
    expect(r.decode("&#1114112;")).toBe("&#1114112;");
  });
});

// ---------------------------------------------------------------------------
// 10. Exports
// ---------------------------------------------------------------------------
describe("exports", () => {
  it("XML_ENTITIES is a plain object with expected keys", () => {
    expect(typeof XML_ENTITIES).toBe("object");
    expect(XML_ENTITIES).toHaveProperty("lt");
    expect(XML_ENTITIES).toHaveProperty("gt");
    expect(XML_ENTITIES).toHaveProperty("quot");
    expect(XML_ENTITIES).toHaveProperty("apos");
    expect(XML_ENTITIES).toHaveProperty("amp");
  });

  it("all named entity groups are plain objects", () => {
    for (const g of [COMMON_HTML, CURRENCY]) {
      expect(typeof g).toBe("object");
      expect(g).not.toBeNull();
    }
  });
});

// ---------------------------------------------------------------------------
// 11. Remove and Leave options
// ---------------------------------------------------------------------------
describe("remove and leave options", () => {
  it("remove: removes specified entities", () => {
    const r = make({ remove: ["nbsp", "copy"] });
    expect(r.decode("a&nbsp;b&copy;c")).toBe("abc");
  });

  it("leave: leaves specified entities as literals", () => {
    const r = make({ leave: ["nbsp", "copy"] });
    expect(r.decode("a&nbsp;b&copy;c")).toBe("a&nbsp;b&copy;c");
  });

  it("remove takes precedence over leave", () => {
    const r = make({ remove: ["nbsp"], leave: ["nbsp"] });
    expect(r.decode("a&nbsp;b")).toBe("ab");
  });

  it("remove applies to base entities", () => {
    const r = make({ remove: ["lt"] });
    expect(r.decode("a&lt;b")).toBe("ab");
  });

  it("leave applies to base entities", () => {
    const r = make({ leave: ["lt"] });
    expect(r.decode("a&lt;b")).toBe("a&lt;b");
  });

  it("remove applies to named entities", () => {
    const r = make({ remove: ["copy"], namedEntities: COMMON_HTML });
    expect(r.decode("a&copy;b")).toBe("ab");
  });

  it("leave applies to named entities", () => {
    const r = make({ leave: ["copy"], namedEntities: COMMON_HTML });
    expect(r.decode("a&copy;b")).toBe("a&copy;b");
  });

  it("remove applies to numeric entities", () => {
    const r = make({ remove: ["#160"] });
    expect(r.decode("a&#160;b")).toBe("ab");
  });

  it("leave applies to numeric entities", () => {
    const r = make({ leave: ["#160"] });
    expect(r.decode("a&#160;b")).toBe("a&#160;b");
  });

  it("remove applies to external entities", () => {
    const r = make({ remove: ["foo"], namedEntities: { foo: "bar" } });
    expect(r.decode("a&foo;b")).toBe("ab");
  });

  it("leave applies to external entities", () => {
    const r = make({ leave: ["foo"], namedEntities: { foo: "bar" } });
    expect(r.decode("a&foo;b")).toBe("a&foo;b");
  });

  it("remove applies to input entities", () => {
    const r = make({ remove: ["foo"] });
    r.addInputEntities({ foo: "bar" });
    expect(r.decode("a&foo;b")).toBe("ab");
  });

  it("leave applies to input entities", () => {
    const r = make({ leave: ["foo"] });
    r.addInputEntities({ foo: "bar" });
    expect(r.decode("a&foo;b")).toBe("a&foo;b");
  });

  it("remove applies to unknown entities (replaces with empty string)", () => {
    const r = make({ remove: ["unknown"] });
    expect(r.decode("a&unknown;b")).toBe("ab");
  });

  it("leave applies to unknown entities (leaves as literal)", () => {
    const r = make({ leave: ["unknown"] });
    expect(r.decode("a&unknown;b")).toBe("a&unknown;b");
  });

  it("remove and leave can be combined", () => {
    const r = make({ remove: ["nbsp"], leave: ["copy"] });
    expect(r.decode("a&nbsp;b&copy;c")).toBe("ab&copy;c");
  });

  it("remove and leave arrays can be empty", () => {
    const r = make({ remove: [], leave: [] });
    expect(r.decode("a&nbsp;b&copy;c")).toBe("a&nbsp;b&copy;c");
  });

  it("remove and leave arrays can be null/undefined (treated as empty)", () => {
    const r1 = make({ remove: null, leave: null });
    expect(r1.decode("a&nbsp;b")).toBe("a&nbsp;b");

    const r2 = make({ remove: undefined, leave: undefined });
    expect(r2.decode("a&nbsp;b")).toBe("a&nbsp;b");
  });

  it("remove and leave arrays can contain duplicates (handled by Set)", () => {
    const r = make({ remove: ["nbsp", "nbsp"], leave: ["copy", "copy"] });
    expect(r.decode("a&nbsp;b&copy;c")).toBe("ab&copy;c");
  });

  it("remove and leave arrays can contain non-string values (ignored)", () => {
    const r = make({ remove: ["nbsp", 123, null, undefined], leave: ["copy", 456, false] });
    expect(r.decode("a&nbsp;b&copy;c")).toBe("ab&copy;c");
  });

  it("remove and leave arrays can contain mixed entity types", () => {
    const r = make({ remove: ["nbsp", "#160"], leave: ["copy", "&copy;"] });
    expect(r.decode("a&nbsp;b&#160;c&copy;d&amp;e")).toBe("abc&copy;d&e");
  });

  it("remove and leave arrays can contain entity names with special chars", () => {
    const r = make({ remove: ["my.entity"], leave: ["another.entity"] });
    r.setExternalEntities({ "my.entity": "REMOVE", "another.entity": "LEAVE" });
    expect(r.decode("a&my.entity;b&another.entity;c")).toBe("ab&another.entity;c");
  });

  it("remove and leave arrays can contain numeric entity strings", () => {
    const r = make({ remove: ["#160"], leave: ["#169"] });
    expect(r.decode("a&#160;b&#169;c")).toBe("ab&#169;c");
  });

  it("remove and leave arrays can contain hex numeric entity strings", () => {
    const r = make({ remove: ["#x20"], leave: ["#x26"] });
    expect(r.decode("a&#x20;b&#x26;c")).toBe("ab&#x26;c");
  });

  it("remove and leave arrays can contain mixed numeric formats", () => {
    const r = make({ remove: ["#160", "#x20"], leave: ["#169", "#x26"] });
    expect(r.decode("a&#160;b&#x20;c&#169;d&#x26;e")).toBe("abc&#169;d&#x26;e");
  });

  it("remove and leave arrays can contain mixed entity types and formats", () => {
    const r = make({
      remove: ["nbsp", "#160", "#x20", "unknown"],
      leave: ["copy", "#169", "#x26", "another.entity"],
      namedEntities: { copy: "\u00a9", another: "ANOTHER" },
    });
    expect(r.decode("a&nbsp;b&#160;c&#x20;d&copy;e&#169;f&#x26;g&another.entity;&another;h&unknown;i")).toBe(
      "abcd&copy;e&#169;f&#x26;g&another.entity;ANOTHERhi"
    );
  });
});
