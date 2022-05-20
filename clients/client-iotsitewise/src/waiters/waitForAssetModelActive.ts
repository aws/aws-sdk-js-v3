// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeAssetModelCommand, DescribeAssetModelCommandInput } from "../commands/DescribeAssetModelCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";

const checkState = async (client: IoTSiteWiseClient, input: DescribeAssetModelCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeAssetModelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.assetModelStatus.state;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.assetModelStatus.state;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAssetModelActive instead. waitForAssetModelActive does not throw error in non-success cases.
 */
export const waitForAssetModelActive = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetModelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetModelCommand for polling.
 */
export const waitUntilAssetModelActive = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetModelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
