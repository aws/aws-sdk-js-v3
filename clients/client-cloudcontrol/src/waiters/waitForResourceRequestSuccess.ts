// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CloudControlClient } from "../CloudControlClient";
import {
  GetResourceRequestStatusCommand,
  GetResourceRequestStatusCommandInput,
} from "../commands/GetResourceRequestStatusCommand";

const checkState = async (
  client: CloudControlClient,
  input: GetResourceRequestStatusCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetResourceRequestStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ProgressEvent.OperationStatus;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProgressEvent.OperationStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProgressEvent.OperationStatus;
      };
      if (returnComparator() === "CANCEL_COMPLETE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until resource operation request is successful
 *  @deprecated Use waitUntilResourceRequestSuccess instead. waitForResourceRequestSuccess does not throw error in non-success cases.
 */
export const waitForResourceRequestSuccess = async (
  params: WaiterConfiguration<CloudControlClient>,
  input: GetResourceRequestStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until resource operation request is successful
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetResourceRequestStatusCommand for polling.
 */
export const waitUntilResourceRequestSuccess = async (
  params: WaiterConfiguration<CloudControlClient>,
  input: GetResourceRequestStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
