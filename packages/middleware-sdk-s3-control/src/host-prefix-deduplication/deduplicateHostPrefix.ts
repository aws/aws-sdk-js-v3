/**
 * @example
 * 12345.12345.____.com should become 12345.____.com.
 */
export const deduplicateHostPrefix = (hostname: string): string => {
  const [prefix1, prefix2, ...rest] = hostname.split(".");
  if (prefix1 === prefix2) {
    return [prefix1, ...rest].join(".");
  }
  return hostname;
};
