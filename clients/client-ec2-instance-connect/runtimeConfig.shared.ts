import { defaultRegionInfoProvider } from "./endpoints";

export const ClientSharedValues = {
  apiVersion: "2018-04-02",
  disableHostPrefix: false,
  signingName: "ec2-instance-connect",
  regionInfoProvider: defaultRegionInfoProvider
};
