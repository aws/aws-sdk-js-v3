import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2018-01-01",
  disableHostPrefix: false,
  logger: undefined,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "fms",
};
