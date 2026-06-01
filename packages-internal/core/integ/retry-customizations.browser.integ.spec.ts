// @vitest-environment happy-dom
import { beforeAll, describe, expect, test as it } from "vitest";

let DynamoDB: any;
let Retry: any;

describe("retry customization (browser bundle)", () => {
  const credentials = { accessKeyId: "INTEG", secretAccessKey: "INTEG" };

  beforeAll(async () => {
    const bundle = await import("../scripts/browser-build/browser-dynamodb-bundle");
    DynamoDB = bundle.DynamoDB;
    Retry = bundle.Retry;
  });

  describe("DynamoDB w/ Retry.v2026", () => {
    beforeAll(() => {
      Retry.v2026 = true;
    });

    it("defaults to 4 attempts", async () => {
      const client = new DynamoDB({ region: "us-west-2", credentials });
      expect(client.config.runtime).toBe("browser");
      const maxAttempts = await client.config.maxAttempts();
      expect(maxAttempts).toBe(4);
    });

    it("user-provided maxAttempts overrides the default", async () => {
      const client = new DynamoDB({ region: "us-west-2", credentials, maxAttempts: 10 });
      expect(client.config.runtime).toBe("browser");
      const maxAttempts = await client.config.maxAttempts();
      expect(maxAttempts).toBe(10);
    });
  });

  describe("DynamoDB WITHOUT Retry.v2026", () => {
    beforeAll(() => {
      Retry.v2026 = false;
    });

    it("defaults to 3 attempts", async () => {
      const client = new DynamoDB({ region: "us-west-2", credentials });
      expect(client.config.runtime).toBe("browser");
      const maxAttempts = await client.config.maxAttempts();
      expect(maxAttempts).toBe(3);
    });

    it("user-provided maxAttempts overrides the default", async () => {
      const client = new DynamoDB({ region: "us-west-2", credentials, maxAttempts: 10 });
      expect(client.config.runtime).toBe("browser");
      const maxAttempts = await client.config.maxAttempts();
      expect(maxAttempts).toBe(10);
    });
  });
});
