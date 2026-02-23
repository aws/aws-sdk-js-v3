import { describe, expect, test as it } from "vitest";

import { NumberValue } from "./NumberValue";

const BIG_DECIMAL =
  "123456789012345678901234567890123456789012345678901234567890.123456789012345678901234567890123456789012345678901234567890";
const BIG_INT = "123456789012345678901234567890123456789012345678901234567890";

describe(NumberValue.name, () => {
  it("can be statically constructed from numbers", () => {
    expect(NumberValue.from(123.123).toString()).toEqual("123.123");

    expect(() => NumberValue.from(1.23e100)).toThrow();
    expect(() => NumberValue.from(Infinity)).toThrow();
    expect(() => NumberValue.from(-Infinity)).toThrow();
    expect(() => NumberValue.from(NaN)).toThrow();
  });

  it("can be statically constructed from strings", () => {
    expect(NumberValue.from(BIG_DECIMAL).toString()).toEqual(BIG_DECIMAL);
  });

  it("can be statically constructed from BigInts", () => {
    expect(NumberValue.from(BigInt(BIG_INT)).toString()).toEqual(BIG_INT);
  });

  it("can convert to AttributeValue", () => {
    expect(NumberValue.from(BIG_DECIMAL).toAttributeValue()).toEqual({
      N: BIG_DECIMAL,
    });
  });

  it("can convert to string", () => {
    expect(NumberValue.from(BIG_DECIMAL).toString()).toEqual(BIG_DECIMAL);
  });

  it("can convert to BigInt", () => {
    expect(NumberValue.from(BIG_INT).toBigInt()).toEqual(BigInt(BIG_INT));
  });
});
