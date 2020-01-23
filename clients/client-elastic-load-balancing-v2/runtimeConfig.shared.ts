import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2015-12-01",
  disableHostPrefix: false,
  signingName: "elasticloadbalancing",
  regionInfoProvider: defaultRegionInfoProvider
};
