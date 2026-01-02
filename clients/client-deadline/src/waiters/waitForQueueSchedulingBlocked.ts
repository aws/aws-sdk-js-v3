// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetQueueCommand, GetQueueCommandInput } from "../commands/GetQueueCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetQueueCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetQueueCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "SCHEDULING_BLOCKED") {
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
 *  @deprecated Use waitUntilQueueSchedulingBlocked instead. waitForQueueSchedulingBlocked does not throw error in non-success cases.
 */
export const waitForQueueSchedulingBlocked = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetQueueCommand for polling.
 */
export const waitUntilQueueSchedulingBlocked = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
