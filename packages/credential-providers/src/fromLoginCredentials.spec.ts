import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@aws-sdk/credential-provider-login", () => ({
  fromLoginCredentials: vi.fn(),
}));

import { fromLoginCredentials as mockFromLoginCredentials } from "@aws-sdk/credential-provider-login";

import { fromLoginCredentials } from "./fromLoginCredentials";

describe("fromLoginCredentials", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call the underlying fromLoginCredentials with provided init", () => {
    const init = { profile: "test-profile" };
    fromLoginCredentials(init);

    expect(mockFromLoginCredentials).toHaveBeenCalledWith(init);
  });

  it("should call the underlying fromLoginCredentials with empty object when no init provided", () => {
    fromLoginCredentials();

    expect(mockFromLoginCredentials).toHaveBeenCalledWith({});
  });
});
