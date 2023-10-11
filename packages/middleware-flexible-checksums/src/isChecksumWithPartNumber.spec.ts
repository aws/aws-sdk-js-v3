import { isChecksumWithPartNumber } from "./isChecksumWithPartNumber";

describe(isChecksumWithPartNumber.name, () => {
  it.each([1, 5000, 10000])("returns true for part number: %s", (partNumber) => {
    expect(isChecksumWithPartNumber(`checksum-${partNumber}`)).toBe(true);
  });

  it.each([0, 10001])("returns false for part number: %s", (partNumber) => {
    expect(isChecksumWithPartNumber(`checksum-${partNumber}`)).toBe(false);
  });

  it("returns false for checksum without part number", () => {
    expect(isChecksumWithPartNumber("checksum")).toBe(false);
  });

  it("returns false for checksum with invalid part number", () => {
    expect(isChecksumWithPartNumber("checksum-invalid")).toBe(false);
  });
});
