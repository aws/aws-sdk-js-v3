// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "../commands/GetJobCommand";
import type { DeadlineClient } from "../DeadlineClient";
import type { DeadlineServiceException } from "../models/DeadlineServiceException";

const checkState = async (client: DeadlineClient, input: GetJobCommandInput): Promise<WaiterResult<GetJobCommandOutput | DeadlineServiceException>> => {
  let reason;
  try {
    let result: GetJobCommandOutput & any = await client.send(new GetJobCommand(input));
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
): Promise<WaiterResult<GetJobCommandOutput | DeadlineServiceException>> => {
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
): Promise<WaiterResult<GetJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetJobCommandOutput>;
};
