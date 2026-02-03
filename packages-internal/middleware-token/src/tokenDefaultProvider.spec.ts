import { nodeProvider } from "@aws-sdk/token-providers";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { tokenDefaultProvider } from "./tokenDefaultProvider";

vi.mock("@aws-sdk/token-providers");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(tokenDefaultProvider.name, () => {
  const mockOutputToken = () =>
    Promise.resolve({
      token: "mockOutputAccessToken",
      expiration: new Date(Date.now() + 2 * ONE_HOUR_IN_MS),
    });

  beforeEach(() => {
    vi.mocked(nodeProvider).mockReturnValue(mockOutputToken);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return nodeProvider", () => {
    const mockInput = {};
    expect(tokenDefaultProvider(mockInput)).toBe(mockOutputToken);
    expect(nodeProvider).toHaveBeenCalledWith(mockInput);
  });
});
