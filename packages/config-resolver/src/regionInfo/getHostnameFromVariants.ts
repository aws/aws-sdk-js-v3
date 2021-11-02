import { EndpointVariant } from "./EndpointVariant";

export interface GetHostnameFromVariantsOptions {
  isFipsEndpoint: boolean;
  isDualstackEndpoint: boolean;
}

export const getHostnameFromVariants = (
  variants: EndpointVariant[] = [],
  { isFipsEndpoint, isDualstackEndpoint }: GetHostnameFromVariantsOptions
) =>
  variants.find(
    ({ tags }) => isFipsEndpoint === tags.includes("fips") && isDualstackEndpoint === tags.includes("dualstack")
  )?.hostname;
