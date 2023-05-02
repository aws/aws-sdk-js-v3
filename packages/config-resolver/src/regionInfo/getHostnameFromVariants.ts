import { EndpointVariant } from "./EndpointVariant";

/**
 * @internal
 */
export interface GetHostnameFromVariantsOptions {
  useFipsEndpoint: boolean;
  useDualstackEndpoint: boolean;
}

/**
 * @internal
 */
export const getHostnameFromVariants = (
  variants: EndpointVariant[] = [],
  { useFipsEndpoint, useDualstackEndpoint }: GetHostnameFromVariantsOptions
) =>
  variants.find(
    ({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack")
  )?.hostname;
