import { HeaderBag } from "@smithy/types";

/**
 * Returns true if header is present in headers.
 * Comparisons are case-insensitive.
 */
export const hasHeader = (header: string, headers: HeaderBag): boolean => {
  const soughtHeader = header.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};
