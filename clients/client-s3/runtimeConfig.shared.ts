import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2006-03-01",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingEscapePath: false,
  signingName: "s3",
};
