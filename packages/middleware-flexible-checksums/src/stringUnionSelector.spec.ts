import { beforeEach, describe, expect, test as it } from "vitest";

import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

describe(stringUnionSelector.name, () => {
  const key = "key";
  const value = "VALUE";
  const obj: { [key]: any } = {} as any;
  const union = { [key]: value };

  describe.each(Object.entries(SelectorType))(`Selector %s`, (selectorKey, selectorValue) => {
    beforeEach(() => {
      delete obj[key];
    });

    it(`should return undefined if ${key} is not defined`, () => {
      // @ts-expect-error Element implicitly has an 'any' type
      expect(stringUnionSelector(obj, key, union, SelectorType[selectorKey])).toBeUndefined();
    });

    it.each([
      [value, value],
      [value, value.toLowerCase()],
      [value, [...value].map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase())).join("")],
    ])(`should return number %s if ${key}="%s"`, (output, input) => {
      obj[key] = input;
      // @ts-expect-error Element implicitly has an 'any' type
      expect(stringUnionSelector(obj, key, union, SelectorType[selectorKey])).toBe(output);
    });

    // Thows if the value is something other than different case.
    it.each(["value1", "1value", [...value].reverse().join("")])(`should throw if ${key}=%s`, (input) => {
      obj[key] = input;
      // @ts-expect-error Element implicitly has an 'any' type
      expect(() => stringUnionSelector(obj, key, union, SelectorType[selectorKey])).toThrow(
        new TypeError(
          `Cannot load ${selectorValue} '${key}'. Expected one of ${Object.values(union)}, got '${obj[key]}'.`
        )
      );
    });
  });
});
