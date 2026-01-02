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
        return result.lifecycleStatus;
      }
      if (returnComparator() === "CREATE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.lifecycleStatus;
      }
      if (returnComparator() === "UPDATE_IN_PROGRESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.lifecycleStatus;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.lifecycleStatus;
      }
      if (returnComparator() === "UPDATE_SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.lifecycleStatus;
      }
      if (returnComparator() === "UPLOAD_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.lifecycleStatus;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Job is created. Use this after invoking CreateJob.
 *  @deprecated Use waitUntilJobCreateComplete instead. waitForJobCreateComplete does not throw error in non-success cases.
 */
export const waitForJobCreateComplete = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Job is created. Use this after invoking CreateJob.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetJobCommand for polling.
 */
export const waitUntilJobCreateComplete = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
