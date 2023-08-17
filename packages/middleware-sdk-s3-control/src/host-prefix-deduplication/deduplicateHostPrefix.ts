import { isIpAddress } from "@aws-sdk/util-endpoints";

/**
 * @example
 * 12345.12345.____.com should become 12345.____.com.
 */
export const deduplicateHostPrefix = (hostname: string): string => {
  const [p1, p2, p3, p4, ...rest] = hostname.split(".");
  if (isIpAddress(`${p1}.${p2}.${p3}.${parseInt(p4, 10)}`)) {
    return hostname;
  }
  if (p1 === p2) {
    return [p2, p3, p4, ...rest].join(".");
  }
  return hostname;
};
