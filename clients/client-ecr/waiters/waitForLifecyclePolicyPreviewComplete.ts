import { ECRClient } from "../ECRClient";
import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
} from "../commands/GetLifecyclePolicyPreviewCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECRClient, input: GetLifecyclePolicyPreviewCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetLifecyclePolicyPreviewCommand(input));
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetLifecyclePolicyPreviewCommand for polling.
 */
export const waitForLifecyclePolicyPreviewComplete = async (
  params: WaiterConfiguration<ECRClient>,
  input: GetLifecyclePolicyPreviewCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
