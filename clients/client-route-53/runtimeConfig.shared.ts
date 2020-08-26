import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2013-04-01",
  disableHostPrefix: false,
  logger: undefined,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "route53",
};
