import { HeaderBag } from "@smithy/types";

/**
 * Returns true if header with headerPrefix is present in headers.
 * Comparisons are case-insensitive.
 */
export const hasHeaderWithPrefix = (headerPrefix: string, headers: HeaderBag): boolean => {
  const soughtHeaderPrefix = headerPrefix.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) {
      return true;
    }
  }
  return false;
};
