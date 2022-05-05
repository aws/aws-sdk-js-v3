// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetCommandInvocationCommand, GetCommandInvocationCommandInput } from "../commands/GetCommandInvocationCommand";
import { SSMClient } from "../SSMClient";

const checkState = async (client: SSMClient, input: GetCommandInvocationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetCommandInvocationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Pending") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "InProgress") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Delayed") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Success") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Cancelled") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "TimedOut") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Cancelling") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvocationDoesNotExist") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilCommandExecuted instead. waitForCommandExecuted does not throw error in non-success cases.
 */
export const waitForCommandExecuted = async (
  params: WaiterConfiguration<SSMClient>,
  input: GetCommandInvocationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCommandInvocationCommand for polling.
 */
export const waitUntilCommandExecuted = async (
  params: WaiterConfiguration<SSMClient>,
  input: GetCommandInvocationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
