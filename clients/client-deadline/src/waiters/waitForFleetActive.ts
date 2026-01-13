// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetFleetCommand, GetFleetCommandInput } from "../commands/GetFleetCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetFleetCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetFleetCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet.
 *  @deprecated Use waitUntilFleetActive instead. waitForFleetActive does not throw error in non-success cases.
 */
export const waitForFleetActive = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetFleetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFleetCommand for polling.
 */
export const waitUntilFleetActive = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetFleetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
