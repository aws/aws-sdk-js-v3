// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetJobCommand, GetJobCommandInput } from "../commands/GetJobCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.taskRunStatus;
      }
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.taskRunStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.taskRunStatus;
      }
      if (returnComparator() === "CANCELED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.taskRunStatus;
      }
      if (returnComparator() === "SUSPENDED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.taskRunStatus;
      }
      if (returnComparator() === "NOT_COMPATIBLE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.lifecycleStatus;
      }
      if (returnComparator() === "ARCHIVED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a job has succeeded. Fails if the job reaches a non-successful terminal status. Waits up to 1 hour by default.
 *  @deprecated Use waitUntilJobSucceeded instead. waitForJobSucceeded does not throw error in non-success cases.
 */
export const waitForJobSucceeded = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a job has succeeded. Fails if the job reaches a non-successful terminal status. Waits up to 1 hour by default.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetJobCommand for polling.
 */
export const waitUntilJobSucceeded = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
