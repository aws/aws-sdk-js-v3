// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

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
 * Wait until a job is created. Use this after invoking CreateJob.
 *  @deprecated Use waitUntilJobCreateComplete instead. waitForJobCreateComplete does not throw error in non-success cases.
 */
export const waitForJobCreateComplete = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetJobCommandInput
): Promise<WaiterResult<GetJobCommandOutput | DeadlineServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a job is created. Use this after invoking CreateJob.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetJobCommand for polling.
 */
export const waitUntilJobCreateComplete = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetJobCommandInput
): Promise<WaiterResult<GetJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetJobCommandOutput>;
};
