/**
 * Converts a comma-separated string into an array of trimmed strings
 * @param str The comma-separated input string to split
 * @returns Array of trimmed strings split from the input
 */
export const getArrayForCommaSeparatedString = (str: string) =>
  typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];
