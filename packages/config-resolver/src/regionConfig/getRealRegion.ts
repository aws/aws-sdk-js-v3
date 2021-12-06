import { isFipsRegion } from "./isFipsRegion";

export const getRealRegion = (region: string) =>
  isFipsRegion(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
      ? "us-east-1"
      : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;
