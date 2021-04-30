import { ECRClient } from "../ECRClient";
import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
} from "../commands/GetLifecyclePolicyPreviewCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECRClient, input: GetLifecyclePolicyPreviewCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetLifecyclePolicyPreviewCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
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
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @deprecated in favor of waitUntilLifecyclePolicyPreviewComplete. This does not throw on failure.
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
/**
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetLifecyclePolicyPreviewCommand for polling.
 */
export const waitUntilLifecyclePolicyPreviewComplete = async (
  params: WaiterConfiguration<ECRClient>,
  input: GetLifecyclePolicyPreviewCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
