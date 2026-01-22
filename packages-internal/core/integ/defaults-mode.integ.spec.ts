import { describe, test as it, expect, beforeEach, afterAll } from "vitest";

import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import type { DefaultsMode } from "@smithy/smithy-client";
import type { NodeHttpHandlerOptions, Provider } from "@smithy/types";
import type { Agent as hAgent } from "http";
import type { Agent as hsAgent } from "https";

describe("defaults mode", () => {
  const snapshot = {
    AWS_EXECUTION_ENV: process.env.AWS_EXECUTION_ENV,
    AWS_REGION: process.env.AWS_REGION,
    AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
    AWS_DEFAULTS_MODE: process.env.AWS_DEFAULTS_MODE,
  };

  beforeEach(async () => {
    delete process.env.AWS_EXECUTION_ENV;
    delete process.env.AWS_REGION;
    delete process.env.AWS_DEFAULT_REGION;
    delete process.env.AWS_DEFAULTS_MODE;
  });

  afterAll(async () => {
    Object.assign(process.env, snapshot);
  });

  const sharedConfig = {
    credentials: {
      accessKeyId: "INTEG",
      secretAccessKey: "INTEG",
    },
    region: "ap-northeast-1",
  };

  async function assertCrossRegion(client: CloudWatch) {
    expect(await (client.config.defaultsMode as Provider<DefaultsMode>)()).toEqual("cross-region");
    const handler = client.config.requestHandler;

    type ResolvedNodeHttpHandlerConfig = Omit<NodeHttpHandlerOptions, "httpAgent" | "httpsAgent"> & {
      httpAgent: hAgent;
      httpsAgent: hsAgent;
    };

    const config = await (
      handler as unknown as {
        configProvider: Promise<ResolvedNodeHttpHandlerConfig>;
      }
    ).configProvider;

    expect(config).toMatchObject({
      connectionTimeout: 3100,
    });
  }

  it("should set a higher timeout due to cross-region defaults mode when auto-detected (ENV)", async () => {
    process.env.AWS_DEFAULTS_MODE = "auto";
    process.env.AWS_EXECUTION_ENV = "INTEGRATION_TEST";
    process.env.AWS_DEFAULT_REGION = "us-east-1";

    const client = new CloudWatch(sharedConfig);

    await assertCrossRegion(client);
  });

  it("should set a higher timeout due to cross-region defaults mode when auto-detected (client-config)", async () => {
    process.env.AWS_EXECUTION_ENV = "INTEGRATION_TEST";
    process.env.AWS_DEFAULT_REGION = "us-east-1";

    const client = new CloudWatch({
      ...sharedConfig,
      defaultsMode: "auto",
    });

    await assertCrossRegion(client);
  });

  it("should set a higher timeout when cross region defaults-mode is set (ENV)", async () => {
    process.env.AWS_DEFAULTS_MODE = "cross-region";

    const client = new CloudWatch(sharedConfig);

    await assertCrossRegion(client);
  });

  it("should set a higher timeout when cross region defaults-mode is set (client-config)", async () => {
    const client = new CloudWatch({
      ...sharedConfig,
      defaultsMode: "cross-region",
    });

    await assertCrossRegion(client);
  });
});
