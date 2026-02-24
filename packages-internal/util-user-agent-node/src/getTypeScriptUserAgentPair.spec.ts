import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("getTypeScriptUserAgentPair", () => {
  const mockTscVersion = "5.9,3";
  const mockImport = vi.fn().mockResolvedValue({ version: mockTscVersion });

  beforeEach(() => {
    vi.doMock("typescript", mockImport);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  it("returns typescript version when available", async () => {
    const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
    const result = await getTypeScriptUserAgentPair();
    expect(result).toEqual(["md/tsc", mockTscVersion]);
  });

  it("returns cached version on subsequent calls", async () => {
    const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");

    await getTypeScriptUserAgentPair();
    const result = await getTypeScriptUserAgentPair();

    expect(result).toEqual(["md/tsc", mockTscVersion]);
    expect(mockImport).toHaveBeenCalledTimes(1);
  });

  it("returns undefined when typescript is not available", async () => {
    mockImport.mockRejectedValueOnce(new Error("Module not found"));

    const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
    const result = await getTypeScriptUserAgentPair();

    expect(result).toBeUndefined();
  });

  it("returns undefined on subsequent calls after import failure", async () => {
    mockImport.mockRejectedValueOnce(new Error("Module not found"));

    const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
    await getTypeScriptUserAgentPair();
    const result = await getTypeScriptUserAgentPair();

    expect(result).toBeUndefined();
    expect(mockImport).toHaveBeenCalledTimes(1);
  });
});
