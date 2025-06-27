import { beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/credential-provider-sso", () => ({
  fromSSO: vi.fn(),
}));

import { fromSSO as OG } from "@aws-sdk/credential-provider-sso";

import { fromSSO } from "./fromSSO";

describe("fromSSO", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("defers to credential-provider-sso", async () => {
    fromSSO();
    expect(vi.mocked(OG)).toHaveBeenCalled();
  });
});
