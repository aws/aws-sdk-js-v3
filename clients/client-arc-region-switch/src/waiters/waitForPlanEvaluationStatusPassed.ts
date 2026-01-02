// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  GetPlanEvaluationStatusCommand,
  GetPlanEvaluationStatusCommandInput,
} from "../commands/GetPlanEvaluationStatusCommand";

const checkState = async (client: ARCRegionSwitchClient, input: GetPlanEvaluationStatusCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetPlanEvaluationStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.evaluationState;
      }
      if (returnComparator() === "passed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.evaluationState;
      }
      if (returnComparator() === "actionRequired") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.evaluationState;
      }
      if (returnComparator() === "pendingEvaluation") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPlanEvaluationStatusPassed instead. waitForPlanEvaluationStatusPassed does not throw error in non-success cases.
 */
export const waitForPlanEvaluationStatusPassed = async (
  params: WaiterConfiguration<ARCRegionSwitchClient>,
  input: GetPlanEvaluationStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPlanEvaluationStatusCommand for polling.
 */
export const waitUntilPlanEvaluationStatusPassed = async (
  params: WaiterConfiguration<ARCRegionSwitchClient>,
  input: GetPlanEvaluationStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
