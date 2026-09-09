import { awsEndpointFunctions } from "@aws-sdk/core/client";
import { customEndpointFunctions, resolveEndpoint } from "@smithy/core/endpoints";
import { beforeAll, describe, expect, test as it } from "vitest";

import type { AstShape } from "../ast/types";

// The AWS default rule-set uses the `aws.partition` endpoint function, which
// must be registered before resolution. `createDynamicClient` does this at
// runtime; the direct-resolution tests here register it explicitly.
beforeAll(() => {
  customEndpointFunctions.aws = awsEndpointFunctions;
});
import {
  DEFAULT_ENDPOINT_RULESET,
  getDefaultAwsEndpointRuleSet,
  getDefaultEndpointRuleSet,
} from "./defaultEndpointRuleSet";

describe("defaultEndpointRuleSet", () => {
  describe("getDefaultEndpointRuleSet (selector)", () => {
    it("returns the basic passthrough rule-set for a non-AWS service", () => {
      expect(getDefaultEndpointRuleSet({ type: "service" })).toBe(DEFAULT_ENDPOINT_RULESET);
    });

    it("returns a regional AWS rule-set for an AWS service, keyed on endpointPrefix", () => {
      const service: AstShape = {
        type: "service",
        traits: { "aws.api#service": { sdkId: "Example", endpointPrefix: "example" } },
      };
      const ruleSet = getDefaultEndpointRuleSet(service);
      expect(ruleSet).not.toBe(DEFAULT_ENDPOINT_RULESET);
      const resolved = resolveEndpoint(ruleSet, { endpointParams: { Region: "eu-west-1" } });
      expect(resolved.url.href).toBe("https://example.eu-west-1.amazonaws.com/");
    });

    it("falls back to the basic rule-set when an AWS service has no prefix at all", () => {
      const service: AstShape = {
        type: "service",
        traits: { "aws.api#service": { sdkId: "Example" } },
      };
      expect(getDefaultEndpointRuleSet(service)).toBe(DEFAULT_ENDPOINT_RULESET);
    });
  });

  describe("DEFAULT_ENDPOINT_RULESET (basic passthrough)", () => {
    it("resolves to the supplied Endpoint", () => {
      const resolved = resolveEndpoint(DEFAULT_ENDPOINT_RULESET, {
        endpointParams: { Endpoint: "https://x.example.com" },
      });
      expect(resolved.url.href).toBe("https://x.example.com/");
    });

    it("errors when Endpoint is not set", () => {
      expect(() => resolveEndpoint(DEFAULT_ENDPOINT_RULESET, { endpointParams: {} })).toThrow(/endpoint is not set/);
    });
  });

  describe("getDefaultAwsEndpointRuleSet (regional)", () => {
    const ruleSet = getDefaultAwsEndpointRuleSet("example");

    it("resolves a standard regional endpoint", () => {
      expect(resolveEndpoint(ruleSet, { endpointParams: { Region: "us-east-1" } }).url.href).toBe(
        "https://example.us-east-1.amazonaws.com/"
      );
    });

    it("resolves a FIPS endpoint", () => {
      expect(resolveEndpoint(ruleSet, { endpointParams: { Region: "us-east-1", UseFIPS: true } }).url.href).toBe(
        "https://example-fips.us-east-1.amazonaws.com/"
      );
    });

    it("resolves a dual-stack endpoint", () => {
      expect(resolveEndpoint(ruleSet, { endpointParams: { Region: "us-east-1", UseDualStack: true } }).url.href).toBe(
        "https://example.us-east-1.api.aws/"
      );
    });

    it("rejects a custom endpoint combined with FIPS", () => {
      expect(() =>
        resolveEndpoint(ruleSet, {
          endpointParams: { Region: "us-east-1", Endpoint: "https://o.example.com", UseFIPS: true },
        })
      ).toThrow(/FIPS and custom endpoint are not supported/);
    });

    it("errors when Region is missing", () => {
      expect(() => resolveEndpoint(ruleSet, { endpointParams: {} })).toThrow(/Missing Region/);
    });
  });
});
