import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2012-08-10",
  disableHostPrefix: false,
  signingName: "dynamodb",
  regionInfoProvider: defaultRegionInfoProvider
};
