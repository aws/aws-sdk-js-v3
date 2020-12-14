import { ECRClient } from "../ECRClient";
import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
} from "../commands/DescribeImageScanFindingsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECRClient, input: DescribeImageScanFindingsCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeImageScanFindingsCommand(input));
    try {
      let returnComparator = () => {
        return result.imageScanStatus.status;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.imageScanStatus.status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until an image scan is complete and findings can be accessed
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeImageScanFindingsCommand for polling.
 */
export const waitForImageScanComplete = async (
  params: WaiterConfiguration<ECRClient>,
  input: DescribeImageScanFindingsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
