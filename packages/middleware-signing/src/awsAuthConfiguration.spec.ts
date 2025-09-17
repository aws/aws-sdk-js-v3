import { HttpRequest } from "@smithy/protocol-http";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { resolveAwsAuthConfig, resolveSigV4AuthConfig } from "./awsAuthConfiguration";

describe("AuthConfig", () => {
  const authScheme = {
    name: "sigv4",
    signingRegion: "UNIT_TEST_REGION",
    signingName: "UNIT_TEST_SERVICE_NAME",
    properties: {},
  };

  describe("resolveAwsAuthConfig", () => {
    const inputParams = () => ({
      credentialDefaultProvider: () => () => Promise.resolve({ accessKeyId: "key", secretAccessKey: "secret" }),
      region: vi.fn().mockImplementation(() => Promise.resolve("us-foo-1")),
      regionInfoProvider: () => Promise.resolve({ hostname: "foo.com", partition: "aws" }),
      serviceId: "foo",
      sha256: vi.fn().mockReturnValue({
        update: vi.fn(),
        digest: vi.fn().mockReturnValue("SHA256 hash"),
      }),
      credentials: vi.fn().mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
      useFipsEndpoint: () => Promise.resolve(false),
      useDualstackEndpoint: () => Promise.resolve(false),
    });

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should memoize custom credential provider", async () => {
      const input = inputParams();
      const spy = input.credentials;
      const { signer: signerProvider } = resolveAwsAuthConfig(input);
      const signer = await signerProvider(authScheme);
      const request = new HttpRequest({});
      const repeats = 10;
      for (let i = 0; i < repeats; i++) {
        await signer.sign(request);
      }
      expect(spy).toBeCalledTimes(1);
    });

    it("should refresh custom credential provider if expired", async () => {
      const FOUR_MINUTES_AND_59_SEC = 299 * 1000;
      const input = {
        ...inputParams(),
        credentials: vi
          .fn()
          .mockResolvedValueOnce({
            accessKeyId: "key",
            secretAccessKey: "secret",
            expiration: new Date(Date.now() + FOUR_MINUTES_AND_59_SEC),
          })
          .mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
      };
      const spy = input.credentials;
      const { signer: signerProvider } = resolveAwsAuthConfig(input);
      const signer = await signerProvider(authScheme);
      const request = new HttpRequest({});
      const repeats = 10;
      for (let i = 0; i < repeats; i++) {
        await signer.sign(request);
      }
      expect(spy).toBeCalledTimes(2);
    });
  });

  describe("resolveSigV4AuthConfig", () => {
    const inputParams = () => ({
      credentialDefaultProvider: () => () => Promise.resolve({ accessKeyId: "key", secretAccessKey: "secret" }),
      region: vi.fn().mockImplementation(() => Promise.resolve("us-foo-1")),
      signingName: "foo",
      sha256: vi.fn().mockReturnValue({
        update: vi.fn(),
        digest: vi.fn().mockReturnValue("SHA256 hash"),
      }),
      credentials: vi.fn().mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
    });

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should memoize custom credential provider", async () => {
      const input = inputParams();
      const spy = input.credentials;
      const { signer: signerProvider } = resolveSigV4AuthConfig(input);
      const signer = await signerProvider(authScheme);
      const request = new HttpRequest({});
      const repeats = 10;
      for (let i = 0; i < repeats; i++) {
        await signer.sign(request);
      }
      expect(spy).toBeCalledTimes(1);
    });

    it("should refresh custom credential provider if expired", async () => {
      const FOUR_MINUTES_AND_59_SEC = 299 * 1000;
      const input = {
        ...inputParams(),
        credentials: vi
          .fn()
          .mockResolvedValueOnce({
            accessKeyId: "key",
            secretAccessKey: "secret",
            expiration: new Date(Date.now() + FOUR_MINUTES_AND_59_SEC),
          })
          .mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
      };
      const spy = input.credentials;
      const { signer: signerProvider, credentials } = resolveSigV4AuthConfig(input);
      const signer = await signerProvider(authScheme);
      const request = new HttpRequest({});
      const repeats = 10;
      for (let i = 0; i < repeats; i++) {
        await signer.sign(request);
      }
      expect(await credentials()).toEqual({
        accessKeyId: "key",
        secretAccessKey: "secret",
      });
      expect(spy).toBeCalledTimes(2);
    });
  });
});
