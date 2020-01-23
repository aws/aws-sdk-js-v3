import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2010-05-15",
  disableHostPrefix: false,
  signingName: "cloudformation",
  regionInfoProvider: defaultRegionInfoProvider
};
