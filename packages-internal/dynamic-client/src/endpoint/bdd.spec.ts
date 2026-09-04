import { decideEndpoint } from "@smithy/core/endpoints";
import { describe, expect, test as it } from "vitest";

import type { EndpointBddTrait } from "./bdd";
import { buildBdd, decodeBddNodes, toConditionTuple, toResultTuples } from "./bdd";

/**
 * The `ite` BDD test-case model, mirroring
 * smithy's endpoint-bdd test-cases. Resolves `https://example{suffix}.com`
 * where `suffix` is `-fips` when `useFips` is true, else empty.
 */
const iteTrait: EndpointBddTrait = {
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
};

describe("bdd", () => {
  describe("decodeBddNodes", () => {
    it("decodes base64 to a big-endian Int32Array of node triples", () => {
      const nodes = decodeBddNodes(iteTrait.nodes);
      const r = 100_000_000;
      // terminal node [-1,1,-1], then node 1 = [var 0, high r+1, low r+0].
      expect(Array.from(nodes)).toEqual([-1, 1, -1, 0, r + 1, r + 0]);
    });

    it("throws when the decoded byte length is not a multiple of 4", () => {
      // "AAA" decodes to 2 bytes.
      expect(() => decodeBddNodes("AAA=")).toThrow(/not a multiple of 4/);
    });
  });

  describe("toConditionTuple", () => {
    it("omits the assign slot when absent", () => {
      expect(toConditionTuple({ fn: "isSet", argv: [{ ref: "Region" }] })).toEqual(["isSet", [{ ref: "Region" }]]);
    });

    it("includes the assign slot when present", () => {
      expect(toConditionTuple({ fn: "ite", argv: [{ ref: "useFips" }, "-fips", ""], assign: "suffix" })).toEqual([
        "ite",
        [{ ref: "useFips" }, "-fips", ""],
        "suffix",
      ]);
    });
  });

  describe("toResultTuples", () => {
    it("prepends the NoMatch terminal at index 0", () => {
      expect(toResultTuples([])).toEqual([[-1]]);
    });

    it("maps an error result to [-1, error]", () => {
      const tuples = toResultTuples([{ type: "error", error: "boom", conditions: [] }]);
      expect(tuples).toEqual([[-1], [-1, "boom"]]);
    });

    it("maps an endpoint result with headers to [url, properties, headers]", () => {
      const tuples = toResultTuples([
        {
          type: "endpoint",
          conditions: [],
          endpoint: { url: "https://x.example.com", properties: { a: 1 }, headers: { h: ["v"] } },
        },
      ]);
      expect(tuples).toEqual([[-1], ["https://x.example.com", { a: 1 }, { h: ["v"] }]]);
    });

    it("omits the headers slot when headers are absent and defaults properties to {}", () => {
      const tuples = toResultTuples([{ type: "endpoint", conditions: [], endpoint: { url: "https://x.example.com" } }]);
      expect(tuples).toEqual([[-1], ["https://x.example.com", {}]]);
    });

    it("throws when an endpoint result is missing its endpoint object", () => {
      expect(() => toResultTuples([{ type: "endpoint", conditions: [] }])).toThrow(/missing an endpoint object/);
    });
  });

  describe("buildBdd + decideEndpoint", () => {
    it("resolves the FIPS endpoint when useFips is true", () => {
      const bdd = buildBdd(iteTrait);
      const resolved = decideEndpoint(bdd, { endpointParams: { useFips: true } });
      expect(resolved.url.href).toBe("https://example-fips.com/");
    });

    it("resolves the non-FIPS endpoint when useFips is false", () => {
      const bdd = buildBdd(iteTrait);
      const resolved = decideEndpoint(bdd, { endpointParams: { useFips: false } });
      expect(resolved.url.href).toBe("https://example.com/");
    });
  });
});
