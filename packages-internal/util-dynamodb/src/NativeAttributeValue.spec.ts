import { describe, expect, test as it } from "vitest";

import type { NativeAttributeValue } from "./models";
import { NumberValue } from "./NumberValue";

/**
 * Regression tests for https://github.com/aws/aws-sdk-js-v3/issues/7526
 *
 * Prior to the fix, the `NativeAttributeValue` union included
 * `InstanceType<{ new (...args: any[]): any }>` which TypeScript widened the
 * entire union to `any`, defeating type checking for users of the
 * DynamoDB Document Client. The fix removes that widening branch.
 *
 * These tests are primarily compile-time assertions. They verify that:
 *   - Valid DynamoDB-compatible values still assign cleanly.
 *   - Values that should never be valid (functions, symbols) are now
 *     rejected by the type checker.
 *
 * The runtime expectations are trivial (`true`) — the real assertions
 * happen at type-check time via the `// @ts-expect-error` markers.
 */

// Helper: an identity-typed sink that forces `value` to be assignable to
// `NativeAttributeValue`. Using a function rather than a `const` annotation
// ensures the assignment is checked even when invoked with literal values.
const acceptsNativeAttributeValue = (value: NativeAttributeValue): NativeAttributeValue => value;

describe("NativeAttributeValue type", () => {
  it("accepts string values", () => {
    const value: NativeAttributeValue = "hello";
    expect(acceptsNativeAttributeValue(value)).toBe("hello");
  });

  it("accepts number values", () => {
    const value: NativeAttributeValue = 42;
    expect(acceptsNativeAttributeValue(value)).toBe(42);
  });

  it("accepts boolean values", () => {
    const value: NativeAttributeValue = true;
    expect(acceptsNativeAttributeValue(value)).toBe(true);
  });

  it("accepts null", () => {
    const value: NativeAttributeValue = null;
    expect(acceptsNativeAttributeValue(value)).toBeNull();
  });

  it("accepts undefined", () => {
    const value: NativeAttributeValue = undefined;
    expect(acceptsNativeAttributeValue(value)).toBeUndefined();
  });

  it("accepts bigint values", () => {
    const value: NativeAttributeValue = BigInt(1);
    expect(acceptsNativeAttributeValue(value)).toBe(BigInt(1));
  });

  it("accepts NumberValue instances", () => {
    const value: NativeAttributeValue = NumberValue.from("123");
    expect(acceptsNativeAttributeValue(value)).toBeInstanceOf(NumberValue);
  });

  it("accepts Uint8Array (binary)", () => {
    const value: NativeAttributeValue = new Uint8Array([1, 2, 3]);
    expect(acceptsNativeAttributeValue(value)).toBeInstanceOf(Uint8Array);
  });

  it("accepts ArrayBuffer (binary)", () => {
    const value: NativeAttributeValue = new ArrayBuffer(4);
    expect(acceptsNativeAttributeValue(value)).toBeInstanceOf(ArrayBuffer);
  });

  it("accepts string Set", () => {
    const value: NativeAttributeValue = new Set(["a", "b"]);
    expect(acceptsNativeAttributeValue(value)).toBeInstanceOf(Set);
  });

  it("accepts number Set", () => {
    const value: NativeAttributeValue = new Set([1, 2, 3]);
    expect(acceptsNativeAttributeValue(value)).toBeInstanceOf(Set);
  });

  it("accepts plain object (map)", () => {
    const value: NativeAttributeValue = { pk: "a", sk: 1, nested: { flag: true } };
    expect(acceptsNativeAttributeValue(value)).toEqual({ pk: "a", sk: 1, nested: { flag: true } });
  });

  it("accepts arrays (list)", () => {
    const value: NativeAttributeValue = [1, "two", null, { nested: true }];
    expect(acceptsNativeAttributeValue(value)).toEqual([1, "two", null, { nested: true }]);
  });

  it("rejects function values at the type level", () => {
    const fn = () => "not a valid attribute";
    // @ts-expect-error functions are not valid DynamoDB attribute values; before
    // the fix, this assignment was silently accepted because the union had
    // collapsed to `any`.
    const value: NativeAttributeValue = fn;
    expect(typeof value).toBe("function");
  });

  it("rejects symbol values at the type level", () => {
    const sym = Symbol("not a valid attribute");
    // @ts-expect-error symbols are not valid DynamoDB attribute values; before
    // the fix, this assignment was silently accepted because the union had
    // collapsed to `any`.
    const value: NativeAttributeValue = sym;
    expect(typeof value).toBe("symbol");
  });

  it("preserves narrowing — values typed as NativeAttributeValue cannot be assigned to string without a cast", () => {
    // Use a function parameter to defeat literal-type narrowing.
    const consume = (attr: NativeAttributeValue): string => {
      // @ts-expect-error before the fix, NativeAttributeValue resolved to `any`
      // and would assign freely to `string` without a cast. After the fix the
      // union no longer includes `any`, so this assignment requires narrowing.
      const asString: string = attr;
      return asString;
    };
    expect(consume("hello")).toBe("hello");
  });
});
