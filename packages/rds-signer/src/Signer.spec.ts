import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";

const mockPresign = jest.fn();
jest.mock("@aws-sdk/signature-v4", () => {
  return {
    SignatureV4: jest.fn().mockImplementation(() => {
      return { presign: mockPresign };
    }),
  };
});

jest.mock("@aws-sdk/node-config-provider");
jest.mock("@aws-sdk/config-resolver");
jest.mock("@aws-sdk/credential-providers");
jest.mock("@aws-sdk/util-format-url");

import { fromNodeJsProviderChain } from "@aws-sdk/credential-providers";
import { loadConfig } from "@aws-sdk/node-config-provider";
import { formatUrl } from "@aws-sdk/util-format-url";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import { getRuntimeConfig as getRnRuntimeConfig } from "./runtimeConfig.native";
import { Signer, SignerConfig } from "./Signer";

describe("rds-signer", () => {
  const minimalParams: SignerConfig = {
    username: "testuser",
    hostname: "https://testhost",
    port: 5432,
  };

  beforeAll(() => {
    (formatUrl as jest.Mock).mockReturnValue("https://testhost:5432?other=url&parameters=here");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should provide correct parameters to the SigV4 signer", async () => {
    const credentials = {
      accessKeyId: "xyz",
      secretAccessKey: "123",
    };
    (loadConfig as jest.Mock).mockReturnValue(async () => "us-foo-1");
    (fromNodeJsProviderChain as jest.Mock).mockReturnValue(async () => credentials);
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    //@ts-ignore
    expect(SignatureV4.mock.calls[0][0].service).toEqual("rds-db");
    //@ts-ignore
    expect(await SignatureV4.mock.calls[0][0].region()).toEqual("us-foo-1");
    //@ts-ignore
    expect(await SignatureV4.mock.calls[0][0].credentials()).toEqual(credentials);
  });

  it.each([
    ["browser", getBrowserRuntimeConfig],
    ["react native", getRnRuntimeConfig],
  ])("should throw if credential or region is missing in %s", async (_, getRuntimeConfig) => {
    const { credentials, region } = getRuntimeConfig(minimalParams);
    expect(credentials).rejects.toEqual("Credential is missing");
    expect(region).rejects.toEqual("Region is missing");
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
