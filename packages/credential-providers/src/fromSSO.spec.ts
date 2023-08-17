import { SSOClient } from "@aws-sdk/client-sso";

import { fromSSO } from "./fromSSO";

jest.mock("@aws-sdk/client-sso", () => ({
  SSOClient: jest.fn().mockImplementation(function () {
    return "SSO_CLIENT";
  }),
}));

describe("fromSSO", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not inject SSO client if no client config supplied", async () => {
    fromSSO();
    expect(SSOClient as jest.Mock).not.toBeCalled();
  });

  it("should inject SSO client if client config is supplied", async () => {
    const region = "us-foo-1";
    fromSSO({ clientConfig: { region } });
    expect(SSOClient as jest.Mock).toBeCalledWith({ region });
  });
});
