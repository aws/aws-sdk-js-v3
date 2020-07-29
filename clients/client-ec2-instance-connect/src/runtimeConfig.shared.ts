import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2018-04-02",
  disableHostPrefix: false,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "ec2-instance-connect",
};
