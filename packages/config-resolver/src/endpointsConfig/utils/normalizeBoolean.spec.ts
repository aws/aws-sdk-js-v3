import { normalizeBoolean } from "./normalizeBoolean";

describe(normalizeBoolean.name, () => {
  it.each([true, false])("returns Provider if value is boolean: %s", async (value) => {
    const output = normalizeBoolean(value);
    expect(await output()).toEqual(value);
  });

  it.each([true, false])("returns Provider if it's a Provider which returns %s", (value) => {
    const mockBooleanProvider = () => Promise.resolve(value);
    expect(normalizeBoolean(mockBooleanProvider)).toBe(mockBooleanProvider);
  });
});
