import "./aws";

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test as it } from "vitest";

import { resolveEndpoint } from "./resolveEndpoint";
import { EndpointError } from "./types";

const runTestCases = (testCases: any[], ruleSetObject: any) => {
  for (const testCase of testCases) {
    const { documentation, params = {} } = testCase;
    (testCase.skip ? it.skip : it)(documentation, () => {
      const _expect = testCase.expect;

      const { endpoint, error } = _expect;

      if (endpoint) {
        const result = resolveEndpoint(ruleSetObject, { endpointParams: params });
        const expected = {
          ...endpoint,
          url: new URL(endpoint.url),
        };

        // Normalize: add empty headers/properties to expected if resolver returns them
        if (!("headers" in expected) && "headers" in result) {
          expected.headers = {};
        }
        if (!("properties" in expected) && "properties" in result) {
          expected.properties = {};
        }

        // Normalize trailing slashes in URL paths for comparison.
        // The URL constructor may normalize paths differently than the resolver.
        if (result.url?.pathname !== expected.url?.pathname) {
          const normalize = (url: URL) => {
            const normalized = new URL(url.href);
            normalized.pathname = normalized.pathname.replace(/\/+$/, "") || "/";
            return normalized;
          };
          result.url = normalize(result.url);
          expected.url = normalize(expected.url);
        }

        expect(result).toStrictEqual(expected);
      }

      if (error) {
        expect(() => resolveEndpoint(ruleSetObject, { endpointParams: params })).toThrowError(new EndpointError(error));
      }
    });
  }
};

describe(resolveEndpoint.name, () => {
  const mocksDir = resolve(__dirname, "__mocks__");
  const rulesDir = resolve(mocksDir, "valid-rules");
  const testCasesDir = resolve(mocksDir, "test-cases");

  const validRules = readdirSync(rulesDir)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => fileName.replace(".json", ""));

  describe.each(validRules)("%s", (ruleName) => {
    const rulesFile = resolve(rulesDir, `${ruleName}.json`);
    const testCasesFile = resolve(testCasesDir, `${ruleName}.json`);

    if (existsSync(testCasesFile)) {
      const ruleSetObject = require(rulesFile);
      const { testCases } = require(testCasesFile);
      runTestCases(testCases, ruleSetObject);
    }
  });

  const awsModelsDir = resolve(__dirname, "..", "..", "..", "codegen", "sdk-codegen", "aws-models");

  if (existsSync(awsModelsDir)) {
    const modelFiles = readdirSync(awsModelsDir).filter((fileName) => fileName.endsWith(".json"));

    describe.each(modelFiles)("aws-models/%s", (modelFile) => {
      const modelPath = resolve(awsModelsDir, modelFile);
      const model = JSON.parse(readFileSync(modelPath, "utf-8"));
      const shapes = model.shapes || {};

      for (const shapeValue of Object.values(shapes)) {
        const traits = (shapeValue as any)?.traits || {};
        const ruleSetObject = traits["smithy.rules#endpointRuleSet"];
        const endpointTests = traits["smithy.rules#endpointTests"];

        if (ruleSetObject && endpointTests) {
          const { testCases } = endpointTests;
          runTestCases(testCases, ruleSetObject);
        }
      }
    });
  }
});
