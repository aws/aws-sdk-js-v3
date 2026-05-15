import { describe, expect, it } from "vitest";

import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";

describe(getSanitizedTypeScriptVersion.name, () => {
  it("returns version for valid semver", () => {
    expect(getSanitizedTypeScriptVersion("5.4.2")).toBe("5.4.2");
  });

  it("returns version with prerelease", () => {
    expect(getSanitizedTypeScriptVersion("5.5.0-beta")).toBe("5.5.0-beta");
  });

  it("strips build metadata", () => {
    expect(getSanitizedTypeScriptVersion("5.4.2+build123")).toBe("5.4.2");
  });

  it("strips build metadata but keeps prerelease", () => {
    expect(getSanitizedTypeScriptVersion("5.5.0-beta+build123")).toBe("5.5.0-beta");
  });

  it("returns undefined for invalid version", () => {
    expect(getSanitizedTypeScriptVersion("invalid")).toBeUndefined();
  });

  it("returns undefined for empty string", () => {
    expect(getSanitizedTypeScriptVersion("")).toBeUndefined();
  });

  it("returns undefined for undefined", () => {
    expect(getSanitizedTypeScriptVersion()).toBeUndefined();
  });
});
