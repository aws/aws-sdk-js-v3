import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2020-10-01",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "emr-containers",
};
