import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { formatUrl } from "@aws-sdk/util-format-url";
import { loadConfig } from "@smithy/node-config-provider";
import { HttpRequest } from "@smithy/protocol-http";
import { SignatureV4 } from "@smithy/signature-v4";
import { beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { Signer, SignerConfig } from "./Signer";

const mockPresign = vi.fn();
vi.mock("@smithy/signature-v4", () => {
  return {
    SignatureV4: vi.fn().mockImplementation(() => {
      return { presign: mockPresign };
    }),
  };
});

vi.mock("@smithy/node-config-provider");
vi.mock("@smithy/config-resolver");
vi.mock("@aws-sdk/credential-providers");
vi.mock("@aws-sdk/util-format-url");

describe("rds-signer", () => {
  const minimalParams: SignerConfig = {
    username: "testuser",
    hostname: "https://testhost",
    port: 5432,
  };

  beforeAll(() => {
    vi.mocked(formatUrl).mockReturnValue("https://testhost:5432?other=url&parameters=here");
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should provide correct parameters to the SigV4 signer", async () => {
    const credentials = {
      accessKeyId: "xyz",
      secretAccessKey: "123",
    };
    vi.mocked(loadConfig).mockReturnValue(async () => "us-foo-1");
    vi.mocked(fromNodeProviderChain).mockReturnValue(async () => credentials);
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    //@ts-ignore
    expect(SignatureV4.mock.calls[0][0].service).toEqual("rds-db");
    //@ts-ignore
    expect(await SignatureV4.mock.calls[0][0].region()).toEqual("us-foo-1");
    //@ts-ignore
    expect(await SignatureV4.mock.calls[0][0].credentials()).toEqual(credentials);
  });

  it("should use supplied credentials if present", async () => {
    const signer = new Signer({
      ...minimalParams,
      credentials: {
        accessKeyId: "123",
        secretAccessKey: "xyz",
      },
    });
    await signer.getAuthToken();
    //@ts-ignore
    expect(SignatureV4.mock.calls[0][0].credentials).toEqual({
      accessKeyId: "123",
      secretAccessKey: "xyz",
    });
  });

  it("should call SigV4 presign with a valid HttpRequest", async () => {
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    expect(mockPresign).toBeCalledTimes(1);
    expect(mockPresign).toBeCalledWith(
      new HttpRequest({
        method: "GET",
        protocol: "https:",
        hostname: "https://testhost",
        port: 5432,
        query: {
          Action: "connect",
          DBUser: "testuser",
        },
        headers: {
          host: "https://testhost:5432",
        },
      }),
      {
        expiresIn: 900,
      }
    );
  });

  it("should format the resulting presigned url", async () => {
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    expect(formatUrl).toBeCalledTimes(1);
  });

  it("should remove the protocol from the presigned url", async () => {
    const signer = new Signer(minimalParams);
    const token = await signer.getAuthToken();
    expect(token).toBe("testhost:5432?other=url&parameters=here");
  });
});
