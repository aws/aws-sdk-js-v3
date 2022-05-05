// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
} from "../commands/GetLifecyclePolicyPreviewCommand";
import { ECRClient } from "../ECRClient";

const checkState = async (client: ECRClient, input: GetLifecyclePolicyPreviewCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetLifecyclePolicyPreviewCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
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
 *  @deprecated Use waitUntilLifecyclePolicyPreviewComplete instead. waitForLifecyclePolicyPreviewComplete does not throw error in non-success cases.
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
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLifecyclePolicyPreviewCommand for polling.
 */
export const waitUntilLifecyclePolicyPreviewComplete = async (
  params: WaiterConfiguration<ECRClient>,
  input: GetLifecyclePolicyPreviewCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
