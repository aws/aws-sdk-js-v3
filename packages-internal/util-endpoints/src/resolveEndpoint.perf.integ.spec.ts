import "./aws";

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test as it } from "vitest";

import { resolveEndpoint } from "./resolveEndpoint";
import type { EndpointParams, RuleSetObject } from "./types";

const ITERATIONS = 1000;

interface TestCase {
  documentation: string;
  params: EndpointParams;
  expect: {
    endpoint?: { url: string; properties?: Record<string, unknown> };
    error?: string;
  };
}

interface ModelData {
  shapes: Record<string, { traits?: Record<string, unknown> }>;
}

function loadModelData(modelFile: string): {
  ruleSet: RuleSetObject;
  testCases: TestCase[];
} {
  const modelPath = resolve(__dirname, "../../../codegen/sdk-codegen/aws-models", modelFile);
  const data: ModelData = JSON.parse(readFileSync(modelPath, "utf-8"));

  let ruleSet: RuleSetObject | undefined;
  let testCases: TestCase[] | undefined;

  for (const shape of Object.values(data.shapes)) {
    const traits = shape.traits ?? {};
    if ("smithy.rules#endpointRuleSet" in traits) {
      ruleSet = traits["smithy.rules#endpointRuleSet"] as RuleSetObject;
    }
    if ("smithy.rules#endpointTests" in traits) {
      testCases = (traits["smithy.rules#endpointTests"] as { testCases: TestCase[] }).testCases;
    }
    if (ruleSet && testCases) break;
  }

  if (!ruleSet || !testCases) {
    throw new Error(`Could not find endpoint rule set or test cases in ${modelFile}`);
  }

  return { ruleSet, testCases };
}

function findTestCase(testCases: TestCase[], documentation: string): TestCase {
  const tc = testCases.find((t) => t.documentation === documentation);
  if (!tc) {
    throw new Error(`Test case not found: "${documentation}"`);
  }
  return tc;
}

function measurePerformance(
  ruleSet: RuleSetObject,
  params: EndpointParams,
  iterations: number
): { avgNs: number; p50Ns: number; p90Ns: number; stdDevNs: number } {
  const times: number[] = [];

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    resolveEndpoint(ruleSet, { endpointParams: params });
    const end = performance.now();
    times.push((end - start) * 1_000_000);
  }

  const sorted = [...times].sort((a, b) => a - b);
  const avg = times.reduce((sum, t) => sum + t, 0) / times.length;
  const p50 = sorted[Math.floor(sorted.length * 0.5)];
  const p90 = sorted[Math.floor(sorted.length * 0.9)];
  const variance = times.reduce((sum, t) => sum + (t - avg) ** 2, 0) / times.length;
  const stdDev = Math.sqrt(variance);

  return { avgNs: avg, p50Ns: p50, p90Ns: p90, stdDevNs: stdDev };
}

describe("resolveEndpoint performance", () => {
  describe("S3", () => {
    const { ruleSet, testCases } = loadModelData("s3.json");

    const s3Tests = [
      "vanilla virtual addressing@us-west-2",
      "vanilla path style@us-west-2",
      "Data Plane with short zone name",
      "vanilla access point arn@us-west-2",
      "S3 outposts vanilla test",
    ];

    it.each(s3Tests)("%s", (documentation) => {
      const testCase = findTestCase(testCases, documentation);

      // Verify correctness first
      const result = resolveEndpoint(ruleSet, { endpointParams: testCase.params });
      if (testCase.expect.endpoint) {
        expect(result.url.toString()).toContain(new URL(testCase.expect.endpoint.url).hostname);
      }

      // Measure performance
      const { avgNs, p50Ns, p90Ns, stdDevNs } = measurePerformance(ruleSet, testCase.params, ITERATIONS);
      console.log(
        `[S3] ${documentation}: avg=${avgNs.toFixed(0)}ns, p50=${p50Ns.toFixed(0)}ns, p90=${p90Ns.toFixed(
          0
        )}ns, stdDev=${stdDevNs.toFixed(0)}ns (${ITERATIONS} iterations)`
      );

      // Sanity check: average should be under 50ms per resolution
      expect(avgNs).toBeLessThan(50_000_000);
    });
  });

  describe("Lambda", () => {
    const { ruleSet, testCases } = loadModelData("lambda.json");

    const lambdaTests = [
      "For region us-east-1 with FIPS disabled and DualStack disabled",
      "For region us-gov-east-1 with FIPS enabled and DualStack enabled",
    ];

    it.each(lambdaTests)("%s", (documentation) => {
      const testCase = findTestCase(testCases, documentation);

      // Verify correctness first
      const result = resolveEndpoint(ruleSet, { endpointParams: testCase.params });
      if (testCase.expect.endpoint) {
        expect(result.url.toString()).toContain(new URL(testCase.expect.endpoint.url).hostname);
      }

      // Measure performance
      const { avgNs, p50Ns, p90Ns, stdDevNs } = measurePerformance(ruleSet, testCase.params, ITERATIONS);
      console.log(
        `[Lambda] ${documentation}: avg=${avgNs.toFixed(0)}ns, p50=${p50Ns.toFixed(0)}ns, p90=${p90Ns.toFixed(
          0
        )}ns, stdDev=${stdDevNs.toFixed(0)}ns (${ITERATIONS} iterations)`
      );

      // Sanity check: average should be under 50ms per resolution
      expect(avgNs).toBeLessThan(50_000_000);
    });
  });
});
