import { STS, STSClient } from "@aws-sdk/client-sts";
import { describe, expect, test as it } from "vitest";

import { resolveStsAuthConfig } from "./index";

describe("middleware-sdk-sts", () => {
  describe(STS.name, () => {
    it("sets the sts constructor in config", async () => {
      const client = new STS({
        region: "us-west-2",
      });

      expect(client.config.stsClientCtor).toBe(STSClient);
    });

    it("maintains object custody", () => {
      const client = new STS({
        region: "us-west-2",
      });
      const input = client.config;
      expect(resolveStsAuthConfig(input, { stsClientCtor: STSClient })).toBe(input);
    });
  });
});
