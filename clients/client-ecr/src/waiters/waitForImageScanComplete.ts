// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
} from "../commands/DescribeImageScanFindingsCommand";
import { ECRClient } from "../ECRClient";

const checkState = async (client: ECRClient, input: DescribeImageScanFindingsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeImageScanFindingsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.imageScanStatus.status;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.imageScanStatus.status;
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
 * Wait until an image scan is complete and findings can be accessed
 *  @deprecated Use waitUntilImageScanComplete instead. waitForImageScanComplete does not throw error in non-success cases.
 */
export const waitForImageScanComplete = async (
  params: WaiterConfiguration<ECRClient>,
  input: DescribeImageScanFindingsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an image scan is complete and findings can be accessed
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageScanFindingsCommand for polling.
 */
export const waitUntilImageScanComplete = async (
  params: WaiterConfiguration<ECRClient>,
  input: DescribeImageScanFindingsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
