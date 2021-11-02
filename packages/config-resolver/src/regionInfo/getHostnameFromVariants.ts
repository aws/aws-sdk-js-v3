import { EndpointVariant } from "./EndpointVariant";

export interface GetHostnameFromVariantsOptions {
  isFipsEndpoint: boolean;
  isDualstackEndpoint: boolean;
}

export const getHostnameFromVariants = (
  variants: EndpointVariant[],
  { isFipsEndpoint, isDualstackEndpoint }: GetHostnameFromVariantsOptions
) => {
  return variants.find(({ tags }) => isFipsEndpoint).hostname;
};
