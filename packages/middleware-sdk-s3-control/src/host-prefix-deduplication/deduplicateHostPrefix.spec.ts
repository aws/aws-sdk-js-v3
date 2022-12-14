import { deduplicateHostPrefix } from "./deduplicateHostPrefix";

describe(deduplicateHostPrefix.name, () => {
  it("should deduplicate host name prefixes", () => {
    expect(deduplicateHostPrefix("a.a.host.com")).toEqual("a.host.com");
    expect(deduplicateHostPrefix("1234567890.1234567890.host.com")).toEqual("1234567890.host.com");
    expect(deduplicateHostPrefix("abcdefgh.abcdefgh.host.com")).toEqual("abcdefgh.host.com");
  });

  it("should do nothing if no duplication exists in the first two positions", () => {
    expect(deduplicateHostPrefix("b.a.host.com")).toEqual("b.a.host.com");
    expect(deduplicateHostPrefix("0123456789.1234567890.host.com")).toEqual("0123456789.1234567890.host.com");
    expect(deduplicateHostPrefix("zabcdefg.abcdefgh.host.com")).toEqual("zabcdefg.abcdefgh.host.com");

    expect(deduplicateHostPrefix("12345.abcdefgh.12345.12345.host.com")).toEqual("12345.abcdefgh.12345.12345.host.com");
  });
});
