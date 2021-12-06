import { EndpointVariant } from "./EndpointVariant";

export interface GetHostnameFromVariantsOptions {
  useFipsEndpoint: boolean;
  useDualstackEndpoint: boolean;
}

export const getHostnameFromVariants = (
  variants: EndpointVariant[] = [],
  { useFipsEndpoint, useDualstackEndpoint }: GetHostnameFromVariantsOptions
) =>
  variants.find(
    ({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack")
  )?.hostname;
