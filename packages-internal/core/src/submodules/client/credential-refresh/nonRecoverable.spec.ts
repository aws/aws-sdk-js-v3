import { describe, expect, it } from "vitest";

import {
  isNonRecoverable,
  markNonRecoverable,
  markNonRecoverableStsError,
  NON_RECOVERABLE_STS_ERROR_CODES,
} from "./nonRecoverable";

describe("markNonRecoverable", () => {
  it("marks an error so the cache recognizes it", () => {
    const error = new Error("run `aws sso login`");

    expect(isNonRecoverable(error)).toBe(false);
    expect(markNonRecoverable(error)).toBe(error);
    expect(isNonRecoverable(error)).toBe(true);
  });

  it("leaves a frozen error alone rather than throwing", () => {
    // Failing to mark only costs a refresh backoff; a TypeError here would replace
    // the provider's message with an unrelated failure.
    const error = Object.freeze(new Error("frozen"));

    expect(() => markNonRecoverable(error)).not.toThrow();
    expect(isNonRecoverable(error)).toBe(false);
  });

  it.each([
    ["null", null],
    ["undefined", undefined],
    ["a string", "not an error"],
  ])("tolerates %s", (_label, thrown) => {
    expect(() => markNonRecoverable(thrown)).not.toThrow();
    expect(isNonRecoverable(thrown)).toBe(false);
  });
});

describe("isNonRecoverable", () => {
  it.each([
    ["a truthy non-boolean", "yes"],
    ["false", false],
    ["undefined", undefined],
  ])("requires the marker to be exactly true, not %s", (_label, value) => {
    expect(isNonRecoverable(Object.assign(new Error("e"), { $nonRecoverable: value }))).toBe(false);
  });
});

describe("markNonRecoverableStsError", () => {
  it("lists exactly the error codes the spec names", () => {
    expect(NON_RECOVERABLE_STS_ERROR_CODES).toEqual([
      "AccessDenied",
      "IDPRejectedClaim",
      "InvalidIdentityToken",
      "MalformedPolicyDocument",
      "PackedPolicyTooLarge",
      "RegionDisabledException",
    ]);
  });

  it.each(NON_RECOVERABLE_STS_ERROR_CODES)("marks %s", (code) => {
    const error = Object.assign(new Error("sts said no"), { name: code });

    expect(markNonRecoverableStsError(error)).toBe(error);
    expect(isNonRecoverable(error)).toBe(true);
  });

  it.each([
    ["a throttling error", "ThrottlingException"],
    ["a transient error", "TimeoutError"],
    ["an expired-credentials rejection, which routes through invalidate instead", "ExpiredToken"],
  ])("leaves %s recoverable", (_label, code) => {
    const error = Object.assign(new Error("sts is unwell"), { name: code });

    expect(markNonRecoverableStsError(error)).toBe(error);
    expect(isNonRecoverable(error)).toBe(false);
  });

  it("returns a thrown non-object unchanged", () => {
    expect(markNonRecoverableStsError(undefined)).toBe(undefined);
  });
});
