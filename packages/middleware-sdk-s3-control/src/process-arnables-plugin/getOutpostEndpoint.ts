const REGEX_S3CONTROL_HOSTNAME = /^(.+\.)?s3-control[.-]([a-z0-9-]+)\./;

export interface GetOutpostEndpointOptions {
  isCustomEndpoint?: boolean;
  regionOverride?: string;
  useFipsEndpoint: boolean;
}

export const getOutpostEndpoint = (
  hostname: string,
  { isCustomEndpoint, regionOverride, useFipsEndpoint }: GetOutpostEndpointOptions
): string => {
  const [matched, prefix, region] = hostname.match(REGEX_S3CONTROL_HOSTNAME)!;
  // hostname prefix will be ignored even if presents
  return isCustomEndpoint
    ? hostname
    : [
        `s3-outposts${useFipsEndpoint ? "-fips" : ""}`,
        regionOverride || region,
        hostname.replace(new RegExp(`^${matched}`), ""),
      ]
        .filter((part) => part !== undefined)
        .join(".");
};
