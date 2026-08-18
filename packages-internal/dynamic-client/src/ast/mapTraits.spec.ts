import { describe, expect, test as it } from "vitest";

import { mapTraits } from "./mapTraits";

describe("mapTraits", () => {
  it("returns 0 when there are no traits", () => {
    expect(mapTraits(undefined)).toBe(0);
    expect(mapTraits({})).toBe(0);
  });

  it("maps unit traits to 1", () => {
    expect(mapTraits({ "smithy.api#sparse": {} })).toEqual({ sparse: 1 });
    expect(mapTraits({ "smithy.api#sensitive": {} })).toEqual({ sensitive: 1 });
    expect(mapTraits({ "smithy.api#idempotencyToken": {} })).toEqual({ idempotencyToken: 1 });
    expect(mapTraits({ "smithy.api#streaming": {} })).toEqual({ streaming: 1 });
    expect(mapTraits({ "smithy.api#httpLabel": {} })).toEqual({ httpLabel: 1 });
  });

  it("copies string trait values", () => {
    expect(mapTraits({ "smithy.api#jsonName": "myName" })).toEqual({ jsonName: "myName" });
    expect(mapTraits({ "smithy.api#httpHeader": "X-Foo" })).toEqual({ httpHeader: "X-Foo" });
    expect(mapTraits({ "smithy.api#mediaType": "application/json" })).toEqual({ mediaType: "application/json" });
  });

  it("maps the error trait to its string fault value", () => {
    expect(mapTraits({ "smithy.api#error": "client" })).toEqual({ error: "client" });
    expect(mapTraits({ "smithy.api#error": "server" })).toEqual({ error: "server" });
  });

  it("maps the http trait to [method, uri, code]", () => {
    expect(mapTraits({ "smithy.api#http": { method: "POST", uri: "/op", code: 201 } })).toEqual({
      http: ["POST", "/op", 201],
    });
    expect(mapTraits({ "smithy.api#http": { method: "GET", uri: "/x" } })).toEqual({ http: ["GET", "/x", 200] });
  });

  it("maps the endpoint host prefix trait", () => {
    expect(mapTraits({ "smithy.api#endpoint": { hostPrefix: "data-" } })).toEqual({ endpoint: ["data-"] });
  });

  it("drops traits that do not affect runtime serde", () => {
    expect(mapTraits({ "smithy.api#documentation": "hi", "smithy.api#tags": ["x"] })).toBe(0);
  });

  it("combines multiple traits into one object", () => {
    expect(mapTraits({ "smithy.api#sparse": {}, "smithy.api#jsonName": "n", "smithy.api#documentation": "d" })).toEqual(
      { sparse: 1, jsonName: "n" }
    );
  });
});
