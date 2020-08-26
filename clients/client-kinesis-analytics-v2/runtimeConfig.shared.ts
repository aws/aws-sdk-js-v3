import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2018-05-23",
  disableHostPrefix: false,
  logger: undefined,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "kinesisanalytics",
};
