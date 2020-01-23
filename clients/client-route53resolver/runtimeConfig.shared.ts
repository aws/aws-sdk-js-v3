import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2018-04-01",
  disableHostPrefix: false,
  signingName: "route53resolver",
  regionInfoProvider: defaultRegionInfoProvider
};
