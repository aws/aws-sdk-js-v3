import { describe, expect, test as it } from "vitest";

import { isFipsRegion } from "./isFipsRegion";

describe(isFipsRegion.name, () => {
  it.each([
    [true, "fips-us-east-1"],
    [true, "us-east-1-fips"],
    [false, "us-east-1"],
  ])(`returns %s for region "%s"`, (output, input) => {
    expect(isFipsRegion(input)).toEqual(output);
  });

  it.each([undefined, null])("returns false for %s", (input) => {
    // @ts-ignore Argument of type 'null | undefined' is not assignable to parameter of type 'string'.
    expect(isFipsRegion(input)).toEqual(false);
  });
});
