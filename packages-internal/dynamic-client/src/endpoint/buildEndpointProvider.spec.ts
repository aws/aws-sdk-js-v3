import { awsEndpointFunctions } from "@aws-sdk/core/client";
import { customEndpointFunctions } from "@smithy/core/endpoints";
import { beforeAll, describe, expect, test as it } from "vitest";

import type { AstShape } from "../ast/types";
import { buildEndpointProvider } from "./buildEndpointProvider";

// The AWS default rule-set (emplaced for AWS services with no endpoint trait)
// uses the `aws.partition` endpoint function, which must be registered before
// resolution. `createDynamicClient` does this at runtime.
beforeAll(() => {
  customEndpointFunctions.aws = awsEndpointFunctions;
});

describe("buildEndpointProvider", () => {
  describe("no endpoint traits (default rule-set emplaced)", () => {
    it("resolves the caller-supplied endpoint via the basic default rule-set", () => {
      const provider = buildEndpointProvider({ type: "service" });
      const resolved = provider({ Endpoint: "https://example.com" });
      expect(resolved.url.href).toBe("https://example.com/");
    });

    it("errors via the basic default rule-set when no endpoint is configured", () => {
      const provider = buildEndpointProvider({ type: "service" });
      expect(() => provider({})).toThrow(/endpoint is not set/);
    });

    it("resolves a regional AWS endpoint for an AWS service with no endpoint trait", () => {
      const service: AstShape = {
        type: "service",
        traits: {
          "aws.api#service": { sdkId: "Example", endpointPrefix: "example" },
        },
      };
      const provider = buildEndpointProvider(service);
      const resolved = provider({ Region: "us-east-1" });
      expect(resolved.url.href).toBe("https://example.us-east-1.amazonaws.com/");
    });

    it("honors an endpoint override on the AWS default rule-set", () => {
      const service: AstShape = {
        type: "service",
        traits: {
          "aws.api#service": { sdkId: "Example", endpointPrefix: "example" },
        },
      };
      const provider = buildEndpointProvider(service);
      expect(provider({ Region: "us-east-1", Endpoint: "https://override.example.com" }).url.href).toBe(
        "https://override.example.com/"
      );
    });

    it("falls back to arnNamespace as the endpoint prefix when endpointPrefix is omitted", () => {
      const service: AstShape = {
        type: "service",
        traits: {
          "aws.api#service": { sdkId: "Example", arnNamespace: "example-arn" },
        },
      };
      const provider = buildEndpointProvider(service);
      expect(provider({ Region: "us-west-2" }).url.href).toBe("https://example-arn.us-west-2.amazonaws.com/");
    });

    it("errors on the AWS default rule-set when Region is missing", () => {
      const service: AstShape = {
        type: "service",
        traits: {
          "aws.api#service": { sdkId: "Example", endpointPrefix: "example" },
        },
      };
      const provider = buildEndpointProvider(service);
      expect(() => provider({})).toThrow(/Missing Region/);
    });
  });

  it("resolves via a ruleset trait", () => {
    const service: AstShape = {
      type: "service",
      traits: {
        "smithy.rules#endpointRuleSet": {
          version: "1.0",
          parameters: {
            endpoint: { type: "string", builtIn: "SDK::Endpoint", required: true, documentation: "" },
          },
          rules: [
            {
              conditions: [],
              endpoint: { url: "{endpoint}" },
              type: "endpoint",
            },
          ],
        },
      },
    };
    const provider = buildEndpointProvider(service);
    const resolved = provider({ endpoint: "https://rules.example.com" });
    expect(resolved.url.href).toBe("https://rules.example.com/");
  });

  it("resolves via a BDD trait (the ite fixture)", () => {
    const service: AstShape = {
      type: "service",
      traits: {
        "smithy.rules#endpointBdd": {
          version: "1.1",
          parameters: {
            useFips: { required: true, default: false, documentation: "Use FIPS endpoints", type: "boolean" },
          },
          conditions: [{ fn: "ite", argv: [{ ref: "useFips" }, "-fips", ""], assign: "suffix" }],
          results: [
            {
              conditions: [],
              endpoint: { url: "https://example{suffix}.com", properties: {}, headers: {} },
              type: "endpoint",
            },
          ],
          root: 2,
          nodeCount: 2,
          nodes: "/////wAAAAH/////AAAAAAX14QEF9eEA",
        },
      },
    };
    const provider = buildEndpointProvider(service);
    expect(provider({ useFips: true }).url.href).toBe("https://example-fips.com/");
    expect(provider({ useFips: false }).url.href).toBe("https://example.com/");
  });

  it("prefers the BDD trait when both BDD and ruleset are present", () => {
    const service: AstShape = {
      type: "service",
      traits: {
        // A ruleset that would resolve to a different host, to prove the BDD wins.
        "smithy.rules#endpointRuleSet": {
          version: "1.0",
          parameters: {},
          rules: [{ conditions: [], endpoint: { url: "https://ruleset.example.com" }, type: "endpoint" }],
        },
        "smithy.rules#endpointBdd": {
          version: "1.1",
          parameters: {
            useFips: { required: true, default: false, documentation: "Use FIPS endpoints", type: "boolean" },
          },
          conditions: [{ fn: "ite", argv: [{ ref: "useFips" }, "-fips", ""], assign: "suffix" }],
          results: [
            {
              conditions: [],
              endpoint: { url: "https://example{suffix}.com", properties: {}, headers: {} },
              type: "endpoint",
            },
          ],
          root: 2,
          nodeCount: 2,
          nodes: "/////wAAAAH/////AAAAAAX14QEF9eEA",
        },
      },
    };
    const provider = buildEndpointProvider(service);
    expect(provider({ useFips: false }).url.href).toBe("https://example.com/");
  });

  it("keys the cache on all declared parameters, not just endpoint", () => {
    // A ruleset whose result varies on Region proves the cache does not collide
    // across differing Region values. If the cache key only covered `endpoint`,
    // the second call would incorrectly return the first call's cached host.
    const service: AstShape = {
      type: "service",
      traits: {
        "smithy.rules#endpointRuleSet": {
          version: "1.0",
          parameters: {
            Region: { type: "string", required: true, documentation: "" },
          },
          rules: [
            {
              conditions: [],
              endpoint: { url: "https://{Region}.example.com" },
              type: "endpoint",
            },
          ],
        },
      },
    };
    const provider = buildEndpointProvider(service);
    expect(provider({ Region: "us-east-1" }).url.href).toBe("https://us-east-1.example.com/");
    expect(provider({ Region: "us-west-2" }).url.href).toBe("https://us-west-2.example.com/");
  });
});
