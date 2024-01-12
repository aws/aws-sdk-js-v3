jest.mock("@aws-sdk/credential-provider-sso", () => ({
  fromSSO: jest.fn(),
}));

import { fromSSO as OG } from "@aws-sdk/credential-provider-sso";

import { fromSSO } from "./fromSSO";

describe("fromSSO", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("defers to credential-provider-sso", async () => {
    fromSSO();
    expect(OG as jest.Mock).toHaveBeenCalled();
  });
});
