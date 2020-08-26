import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2015-11-01",
  disableHostPrefix: false,
  logger: undefined,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "discovery",
};
