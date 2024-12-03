import { Sha256 } from "@aws-crypto/sha256-js";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { loadConfig } from "@smithy/node-config-provider";
import { AwsCredentialIdentity } from "@smithy/types";
import { beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { DsqlSigner, DsqlSignerConfig } from "./Signer";

vi.mock("@smithy/node-config-provider");
vi.mock("@smithy/config-resolver");
vi.mock("@aws-sdk/credential-providers");

describe("dsql-signer", () => {
  const credentials_provider: AwsCredentialIdentity = {
    accessKeyId: "ACCESS_KEY",
    secretAccessKey: "SECRET_KEY",
    sessionToken: "SESSION_TOKEN",
  };

  const minimalParams: DsqlSignerConfig = {
    hostname: "test.example.com",
  };

  beforeAll(() => {
    vi.mocked(fromNodeProviderChain).mockReturnValue(async () => credentials_provider);
    vi.mocked(loadConfig).mockReturnValue(async () => "us-east-1");
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("valid hostname", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAuthToken();
    expect(token.startsWith("test.example.com")).toBeTruthy();
  });

  it("valid region", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("us-east-1");
  });

  it("specified region overrides default", async () => {
    const signer = new DsqlSigner({
      ...minimalParams,
      region: "us-west-2",
    });
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("us-west-2");
  });

  it("valid Admin action", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAdminAuthToken();
    expect(token).toContain("Action=DbConnectAdmin");
  });

  it("valid dbconnect action", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("Action=DbConnect");
  });

  it("valid default expiry time", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("X-Amz-Expires=900");
  });

  it("valid custom expiry time", async () => {
    const signer = new DsqlSigner({
      ...minimalParams,
      expiresIn: 1200,
    });
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("X-Amz-Expires=1200");
  });

  it("valid amazon access key", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("X-Amz-Credential=ACCESS_KEY");
  });

  it("valid amazon security token", async () => {
    const signer = new DsqlSigner(minimalParams);
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("X-Amz-Security-Token=SESSION_TOKEN");
  });

  it("specified credentials override default", async () => {
    const signer = new DsqlSigner({
      ...minimalParams,
      credentials: {
        accessKeyId: "tempAccessKey",
        secretAccessKey: "tempSecretAccessKey",
        sessionToken: "tempSessionToken",
      },
    });
    const token = await signer.getDbConnectAuthToken();
    expect(token).toContain("X-Amz-Credential=tempAccessKey");
    expect(token).toContain("X-Amz-Security-Token=tempSessionToken");
  });

  it("all parameters provided", async () => {
    const allParamsConfig: DsqlSignerConfig = {
      hostname: "allparams.example.com",
      region: "us-east-2",
      credentials: {
        accessKeyId: "allParamsAccessKey",
        secretAccessKey: "allParamsSecretAccessKey",
        sessionToken: "allParamsSessionToken",
      },
      expiresIn: 1000,
      sha256: Sha256,
    };
    const signer = new DsqlSigner(allParamsConfig);
    const token = await signer.getDbConnectAdminAuthToken();
    expect(token.startsWith("allparams.example.com")).toBeTruthy();
    expect(token).toContain("us-east-2");
    expect(token).toContain("Action=DbConnectAdmin");
    expect(token).toContain("X-Amz-Expires=1000");
    expect(token).toContain("X-Amz-Credential=allParamsAccessKey");
    expect(token).toContain("X-Amz-Security-Token=allParamsSessionToken");
    expect(token).toContain("%2Fdsql%2F");
  });
});
