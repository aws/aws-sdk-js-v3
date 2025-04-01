import { describe, expect, test as it } from "vitest";

import { validateAccountIdEndpointMode } from "./AccountIdEndpointModeConstants";

describe("validateAccountIdEndpointMode", () => {
  it('should return true for "disabled"', () => {
    const result = validateAccountIdEndpointMode("disabled");
    expect(result).toBe(true);
  });

  it('should return true for "preferred"', () => {
    const result = validateAccountIdEndpointMode("preferred");
    expect(result).toBe(true);
  });

  it('should return true for "required"', () => {
    const result = validateAccountIdEndpointMode("required");
    expect(result).toBe(true);
  });

  it("should return false for an invalid value", () => {
    const result = validateAccountIdEndpointMode("invalidValue");
    expect(result).toBe(false);
  });

  it("should return false for an empty string", () => {
    const result = validateAccountIdEndpointMode("");
    expect(result).toBe(false);
  });

  it("should return false for a number", () => {
    const result = validateAccountIdEndpointMode(123);
    expect(result).toBe(false);
  });

  it("should return false for null", () => {
    const result = validateAccountIdEndpointMode(null);
    expect(result).toBe(false);
  });

  it("should return false for undefined", () => {
    const result = validateAccountIdEndpointMode(undefined);
    expect(result).toBe(false);
  });
});
