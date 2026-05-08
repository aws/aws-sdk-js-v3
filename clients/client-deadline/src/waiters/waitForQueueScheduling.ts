// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetQueueCommandInput, type GetQueueCommandOutput, GetQueueCommand } from "../commands/GetQueueCommand";
import type { DeadlineClient } from "../DeadlineClient";
import type { DeadlineServiceException } from "../models/DeadlineServiceException";

const checkState = async (client: DeadlineClient, input: GetQueueCommandInput): Promise<WaiterResult<GetQueueCommandOutput | DeadlineServiceException>> => {
  let reason;
  try {
    let result: GetQueueCommandOutput & any = await client.send(new GetQueueCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "SCHEDULING") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilQueueScheduling instead. waitForQueueScheduling does not throw error in non-success cases.
 */
export const waitForQueueScheduling = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueCommandInput
): Promise<WaiterResult<GetQueueCommandOutput | DeadlineServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 700 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetQueueCommand for polling.
 */
export const waitUntilQueueScheduling = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueCommandInput
): Promise<WaiterResult<GetQueueCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 700 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetQueueCommandOutput>;
};
