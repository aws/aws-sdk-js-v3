import { describe, expect, test as it } from "vitest";

import { ModelIndex, parseShapeId } from "./ModelIndex";
import type { SmithyAst } from "./types";

const ast: SmithyAst = {
  smithy: "2.0",
  shapes: {
    "example.weather#Weather": {
      type: "service",
      version: "2006-03-01",
      operations: [{ target: "example.weather#GetCity" }],
      resources: [{ target: "example.weather#Forecast" }],
      traits: {
        "smithy.protocols#rpcv2Cbor": {},
        "smithy.api#documentation": "ignored",
      },
    },
    "example.weather#Forecast": {
      type: "resource",
      operations: [{ target: "example.weather#GetForecast" }],
    },
    "example.weather#GetCity": {
      type: "operation",
      input: { target: "example.weather#GetCityInput" },
      output: { target: "example.weather#GetCityOutput" },
    },
    "example.weather#GetForecast": {
      type: "operation",
      input: { target: "smithy.api#Unit" },
      output: { target: "smithy.api#Unit" },
    },
    "example.weather#GetCityInput": {
      type: "structure",
      members: {
        cityId: { target: "smithy.api#String", traits: { "smithy.api#required": {} } },
      },
    },
    "example.weather#GetCityOutput": {
      type: "structure",
      members: {
        name: { target: "smithy.api#String" },
      },
    },
  },
};

describe("parseShapeId", () => {
  it("splits namespace and name", () => {
    expect(parseShapeId("example.weather#Weather")).toEqual({ namespace: "example.weather", name: "Weather" });
  });
});

describe("ModelIndex", () => {
  const index = new ModelIndex(ast);

  it("resolves the single service", () => {
    expect(index.getServiceId()).toBe("example.weather#Weather");
    expect(index.getService().type).toBe("service");
  });

  it("looks up shapes by id and returns undefined for absent shapes", () => {
    expect(index.getShape("example.weather#GetCity")?.type).toBe("operation");
    expect(index.getShape("smithy.api#String")).toBeUndefined();
  });

  it("extracts protocol trait shape ids from the service", () => {
    expect(index.getProtocolTraits()).toContain("smithy.protocols#rpcv2Cbor");
  });

  it("collects operations from the service and nested resources", () => {
    expect(index.getOperationIds().sort()).toEqual(["example.weather#GetCity", "example.weather#GetForecast"].sort());
  });

  it("translates member traits", () => {
    const input = index.getShape("example.weather#GetCityInput")!;
    // required is not a runtime serde trait, so it is dropped.
    expect(index.getTraits(input.members!.cityId)).toBe(0);
  });

  it("throws when the AST has no service", () => {
    expect(() => new ModelIndex({ smithy: "2.0", shapes: {} })).toThrow(/no service/);
  });

  it("throws when the AST has more than one service", () => {
    expect(
      () =>
        new ModelIndex({
          smithy: "2.0",
          shapes: {
            "a#A": { type: "service" },
            "b#B": { type: "service" },
          },
        })
    ).toThrow(/more than one service/);
  });
});
