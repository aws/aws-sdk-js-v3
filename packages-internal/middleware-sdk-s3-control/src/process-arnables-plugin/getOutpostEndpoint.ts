const REGEX_S3CONTROL_HOSTNAME = /^(.+\.)?s3-control(-fips)?[.-]([a-z0-9-]+)\./;

export interface GetOutpostEndpointOptions {
  isCustomEndpoint?: boolean;
  regionOverride?: string;
  useFipsEndpoint: boolean;
}

export const getOutpostEndpoint = (
  hostname: string,
  { isCustomEndpoint, regionOverride, useFipsEndpoint }: GetOutpostEndpointOptions
): string => {
  if (isCustomEndpoint) {
    return hostname;
  }

  const match = hostname.match(REGEX_S3CONTROL_HOSTNAME);

  if (!match) {
    // outposts hostname was already set by endpoints ruleset.
    return hostname;
  }

  const [matched, prefix, fips, region] = hostname.match(REGEX_S3CONTROL_HOSTNAME)!;
  // hostname prefix will be ignored even if it is present
  return [
    `s3-outposts${useFipsEndpoint ? "-fips" : ""}`,
    regionOverride || region,
    hostname.replace(new RegExp(`^${matched}`), ""),
  ]
    .filter((part) => part !== undefined)
    .join(".");
};
