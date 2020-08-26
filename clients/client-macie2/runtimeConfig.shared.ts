import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2020-01-01",
  disableHostPrefix: false,
  logger: undefined,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "macie2",
};
