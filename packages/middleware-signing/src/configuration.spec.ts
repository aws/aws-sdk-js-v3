import { HttpRequest } from "@aws-sdk/protocol-http";

import { resolveAwsAuthConfig } from "./configurations";

describe("resolveAwsAuthConfig", () => {
  const inputParams = {
    credentialDefaultProvider: () => () => Promise.resolve({ accessKeyId: "key", secretAccessKey: "secret" }),
    region: jest.fn().mockImplementation(() => Promise.resolve("us-foo-1")),
    regionInfoProvider: () => Promise.resolve({ hostname: "foo.com", partition: "aws" }),
    serviceId: "foo",
    sha256: jest.fn().mockReturnValue({
      update: jest.fn(),
      digest: jest.fn().mockReturnValue("SHA256 hash"),
    }),
    credentials: jest.fn().mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should memoize custom credential provider", async () => {
    const { signer: signerProvider } = resolveAwsAuthConfig(inputParams);
    const signer = await signerProvider();
    const request = new HttpRequest({});
    const repeats = 10;
    for (let i = 0; i < repeats; i++) {
      await signer.sign(request);
    }
    expect(inputParams.credentials).toBeCalledTimes(1);
  });

  it("should refresh custom credential provider if expired", async () => {
    const FOUR_MINUTES_AND_59_SEC = 299 * 1000;
    const input = {
      ...inputParams,
      credentials: jest
        .fn()
        .mockResolvedValueOnce({
          accessKeyId: "key",
          secretAccessKey: "secret",
          expiration: new Date(Date.now() + FOUR_MINUTES_AND_59_SEC),
        })
        .mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
    };
    const { signer: signerProvider } = resolveAwsAuthConfig(input);
    const signer = await signerProvider();
    const request = new HttpRequest({});
    const repeats = 10;
    for (let i = 0; i < repeats; i++) {
      await signer.sign(request);
    }
    expect(input.credentials).toBeCalledTimes(2);
  });
});
