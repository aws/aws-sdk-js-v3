import { describe, expect, it } from "vitest";

import { getSanitizedDevTypeScriptVersion } from "./getSanitizedDevTypeScriptVersion";

describe(getSanitizedDevTypeScriptVersion.name, () => {
  it.each(["latest", "beta", "dev", "rc", "insiders", "next"])("returns dist tag '%s' as-is", (tag) => {
    expect(getSanitizedDevTypeScriptVersion(tag)).toBe(tag);
  });

  it.each(["^", "~", ">=", "<=", ">", "<"])("preserves prefix '%s' with valid semver", (prefix) => {
    expect(getSanitizedDevTypeScriptVersion(`${prefix}5.4.2`)).toBe(`${prefix}5.4.2`);
  });

  it("returns version for valid semver without prefix", () => {
    expect(getSanitizedDevTypeScriptVersion("5.4.2")).toBe("5.4.2");
  });

  it("strips build metadata", () => {
    expect(getSanitizedDevTypeScriptVersion("^5.4.2+build123")).toBe("^5.4.2");
  });

  it("returns undefined for invalid version", () => {
    expect(getSanitizedDevTypeScriptVersion("invalid")).toBeUndefined();
  });

  it("returns undefined for empty string", () => {
    expect(getSanitizedDevTypeScriptVersion("")).toBeUndefined();
  });

  it("returns undefined for undefined", () => {
    expect(getSanitizedDevTypeScriptVersion()).toBeUndefined();
  });
});
