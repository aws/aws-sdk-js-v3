import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2012-12-01",
  disableHostPrefix: false,
  signingName: "redshift",
  regionInfoProvider: defaultRegionInfoProvider
};
