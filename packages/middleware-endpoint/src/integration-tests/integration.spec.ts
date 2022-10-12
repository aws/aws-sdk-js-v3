import * as S3Namespace from "@aws-sdk/client-s3";
import { EndpointV2 } from "@aws-sdk/types";

// import { defaultEndpointResolver } from "../../../../clients/client-s3/src/endpoint/endpointResolver";
const defaultEndpointResolver = (...args: any): any => {};
import { resolveParams } from "../adaptors";
import { EndpointExpectation, EndpointTestCase, ErrorExpectation, ServiceNamespace } from "./integration-test-types";
import customTests from "./s3/custom-tests.json";
import generatedTests from "./s3/generated-tests.json";
import o from "./s3/o.json";
import oa from "./s3/oa.json";
import ol from "./s3/ol.json";
import s from "./s3/s.json";

describe("endpoints 2.0 service integration", () => {
  describe("s3", () => {
    it("placeholder", () => {});

    if (customTests.testCases?.length) {
      describe("custom", () => {
        runTestCases(customTests, S3Namespace as ServiceNamespace);
      });
    }

    if (generatedTests.testCases?.length) {
      describe("generated", () => {
        runTestCases(generatedTests, S3Namespace as ServiceNamespace);
      });
    }

    return; // skipping additional tests for now.

    for (const group of [o, oa, ol, s]) {
      if (group.testCases?.length) {
        describe("additional test group", () => {
          runTestCases(group, S3Namespace as ServiceNamespace);
        });
      }
    }
  });
});

function runTestCases({ testCases }: { testCases: EndpointTestCase[] }, service: ServiceNamespace) {
  const start = 0; //67;
  const end = 100; //68;
  for (const testCase of testCases.slice(start, end)) {
    runTestCase(testCase, service);
  }
}

async function runTestCase(testCase: EndpointTestCase, service: ServiceNamespace) {
  const { documentation, params = {}, expect: expectation, operationInputs } = testCase;

  if (params.UseGlobalEndpoint || params.Region === "aws-global") {
    it.skip(documentation || "undocumented testcase", () => {});
    return;
  }

  if (service === S3Namespace) {
    params.serviceId = "s3";
  }

  it(documentation || "undocumented testcase", async () => {
    if (isEndpointExpectation(expectation)) {
      const { endpoint } = expectation;
      if (operationInputs) {
        for (const operationInput of operationInputs) {
          const { operationName, operationParams = {} } = operationInput;
          const endpointParams = await resolveParams(operationParams, service[`${operationName}Command`], params);
          const observed = defaultEndpointResolver(endpointParams as any);
          console.log("params were", endpointParams);
          assertEndpointResolvedCorrectly(endpoint, observed);
        }
      } else {
        const endpointParams = await resolveParams({}, {}, params);
        const observed = defaultEndpointResolver(endpointParams as any);
        console.log("params were", endpointParams);
        assertEndpointResolvedCorrectly(endpoint, observed);
      }
    }
    if (isErrorExpectation(expectation)) {
      const { error } = expectation;
      const pass = (err) => err;
      const normalizeQuotes = (s) => s.replace(/`/g, "");
      if (operationInputs) {
        for (const operationInput of operationInputs) {
          const { operationName, operationParams = {} } = operationInput;
          const endpointParams = await resolveParams(operationParams, service[`${operationName}Command`], {
            ...params,
            endpointProvider: defaultEndpointResolver,
          }).catch(pass);
          const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
          expect(observedError).not.toBeUndefined();
          expect(observedError?.url).toBeUndefined();
          // expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
        }
      } else {
        const endpointParams = await resolveParams({}, {}, params).catch(pass);
        const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
        console.error(observedError);
        expect(observedError).not.toBeUndefined();
        expect(observedError?.url).toBeUndefined();
        // expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
      }
    }
  });
}

function assertEndpointResolvedCorrectly(expected: EndpointExpectation["endpoint"], observed: EndpointV2) {
  const { url, headers, properties } = expected;
  const { authSchemes } = properties || {};
  if (url) {
    expect(observed.url.href).toContain(url);
    expect(Math.abs(observed.url.href.length - url.length)).toBeLessThan(2);
  }
  if (headers) {
    expect(observed.headers).toEqual(headers);
  }
  if (authSchemes) {
    // expect(observed.properties?.authSchemes).toEqual(authSchemes);
  }
}

function isEndpointExpectation(expectation: object): expectation is EndpointExpectation {
  return "endpoint" in expectation;
}

function isErrorExpectation(expectation: object): expectation is ErrorExpectation {
  return "error" in expectation;
}
