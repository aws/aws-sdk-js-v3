// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  GetQueueFleetAssociationCommand,
  GetQueueFleetAssociationCommandInput,
} from "../commands/GetQueueFleetAssociationCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetQueueFleetAssociationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetQueueFleetAssociationCommand(input));
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
 * Wait until a QueueFleetAssociation is stopped. Use this after setting the status to STOP_SCHEDULING_AND_COMPLETE_TASKS or STOP_SCHEDULING_AND_CANCEL_TASKS to wait for a QueueFleetAssociation to reach STOPPED
 *  @deprecated Use waitUntilQueueFleetAssociationStopped instead. waitForQueueFleetAssociationStopped does not throw error in non-success cases.
 */
export const waitForQueueFleetAssociationStopped = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueFleetAssociationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a QueueFleetAssociation is stopped. Use this after setting the status to STOP_SCHEDULING_AND_COMPLETE_TASKS or STOP_SCHEDULING_AND_CANCEL_TASKS to wait for a QueueFleetAssociation to reach STOPPED
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetQueueFleetAssociationCommand for polling.
 */
export const waitUntilQueueFleetAssociationStopped = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetQueueFleetAssociationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
