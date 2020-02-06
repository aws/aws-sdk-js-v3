import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2006-03-01",
  disableHostPrefix: false,
  signingName: "s3",
  regionInfoProvider: defaultRegionInfoProvider,
  signingEscapePath: false
};
