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
    expect(isFipsRegion(input)).toEqual(false);
  });
});
