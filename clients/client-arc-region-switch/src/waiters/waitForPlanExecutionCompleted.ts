// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import { GetPlanExecutionCommand, GetPlanExecutionCommandInput } from "../commands/GetPlanExecutionCommand";

const checkState = async (
  client: ARCRegionSwitchClient,
  input: GetPlanExecutionCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetPlanExecutionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.executionState;
      };
      if (returnComparator() === "completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.executionState;
      };
      if (returnComparator() === "completedWithExceptions") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.executionState;
      };
      if (returnComparator() === "failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.executionState;
      };
      if (returnComparator() === "canceled") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.executionState;
      };
      if (returnComparator() === "planExecutionTimedOut") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPlanExecutionCompleted instead. waitForPlanExecutionCompleted does not throw error in non-success cases.
 */
export const waitForPlanExecutionCompleted = async (
  params: WaiterConfiguration<ARCRegionSwitchClient>,
  input: GetPlanExecutionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPlanExecutionCommand for polling.
 */
export const waitUntilPlanExecutionCompleted = async (
  params: WaiterConfiguration<ARCRegionSwitchClient>,
  input: GetPlanExecutionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
