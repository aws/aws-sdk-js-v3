// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "../commands/GetJobCommand";
import type { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingServiceException } from "../models/EndUserMessagingServiceException";

const checkState = async (client: EndUserMessagingClient, input: GetJobCommandInput): Promise<WaiterResult<GetJobCommandOutput | EndUserMessagingServiceException>> => {
  let reason;
  try {
    let result: GetJobCommandOutput & any = await client.send(new GetJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
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
 * Wait until an async job reaches the SUCCESS terminal state.
 *  @deprecated Use waitUntilJobSuccess instead. waitForJobSuccess does not throw error in non-success cases.
 */
export const waitForJobSuccess = async (
  params: WaiterConfiguration<EndUserMessagingClient>,
  input: GetJobCommandInput
): Promise<WaiterResult<GetJobCommandOutput | EndUserMessagingServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an async job reaches the SUCCESS terminal state.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetJobCommand for polling.
 */
export const waitUntilJobSuccess = async (
  params: WaiterConfiguration<EndUserMessagingClient>,
  input: GetJobCommandInput
): Promise<WaiterResult<GetJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetJobCommandOutput>;
};
