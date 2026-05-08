// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeAssetModelCommandInput,
  type DescribeAssetModelCommandOutput,
  DescribeAssetModelCommand,
} from "../commands/DescribeAssetModelCommand";
import type { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWiseServiceException } from "../models/IoTSiteWiseServiceException";

const checkState = async (client: IoTSiteWiseClient, input: DescribeAssetModelCommandInput): Promise<WaiterResult<DescribeAssetModelCommandOutput | IoTSiteWiseServiceException>> => {
  let reason;
  try {
    let result: DescribeAssetModelCommandOutput & any = await client.send(new DescribeAssetModelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.assetModelStatus.state;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.assetModelStatus.state;
      }
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
): Promise<WaiterResult<DescribeAssetModelCommandOutput | IoTSiteWiseServiceException>> => {
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
): Promise<WaiterResult<DescribeAssetModelCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeAssetModelCommandOutput>;
};
