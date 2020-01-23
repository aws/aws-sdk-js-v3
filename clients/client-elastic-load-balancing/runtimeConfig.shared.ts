import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2012-06-01",
  disableHostPrefix: false,
  signingName: "elasticloadbalancing",
  regionInfoProvider: defaultRegionInfoProvider
};
