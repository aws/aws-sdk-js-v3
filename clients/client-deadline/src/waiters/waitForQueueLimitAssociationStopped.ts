// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  GetQueueLimitAssociationCommand,
  GetQueueLimitAssociationCommandInput,
} from "../commands/GetQueueLimitAssociationCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetQueueLimitAssociationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetQueueLimitAssociationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "STOPPED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a QueueLimitAssociation is stopped. Use this after setting the status to STOP_LIMIT_USAGE_AND_COMPLETE_TASKS or STOP_LIMIT_USAGE_AND_CANCEL_TASKS to wait for a QueueLimitAssociation to reach STOPPED
 *  @deprecated Use waitUntilQueueLimitAssociationStopped instead. waitForQueueLimitAssociationStopped does not throw error in non-success cases.
 */
export const waitForQueueLimitAssociationStopped = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueLimitAssociationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a QueueLimitAssociation is stopped. Use this after setting the status to STOP_LIMIT_USAGE_AND_COMPLETE_TASKS or STOP_LIMIT_USAGE_AND_CANCEL_TASKS to wait for a QueueLimitAssociation to reach STOPPED
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetQueueLimitAssociationCommand for polling.
 */
export const waitUntilQueueLimitAssociationStopped = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueLimitAssociationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
