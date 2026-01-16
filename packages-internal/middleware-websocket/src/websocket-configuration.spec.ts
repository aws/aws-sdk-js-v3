import { describe, expect, test as it, vi } from "vitest";

import { resolveWebSocketConfig } from "./websocket-configuration";

describe(resolveWebSocketConfig.name, () => {
  it("maintains object custody", () => {
    const input = {
      signer: vi.fn(),
      requestHandler: vi.mocked(vi.fn()) as any,
    };
    expect(resolveWebSocketConfig(input)).toBe(input);
  });
});
