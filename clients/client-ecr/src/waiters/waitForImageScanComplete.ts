import { ECRClient } from "../ECRClient";
import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
} from "../commands/DescribeImageScanFindingsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECRClient, input: DescribeImageScanFindingsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeImageScanFindingsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.imageScanStatus.status;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
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
