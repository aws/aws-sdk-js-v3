// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetWorkflowCommand, GetWorkflowCommandInput } from "../commands/GetWorkflowCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetWorkflowCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetWorkflowCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
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
 * Wait until a workflow is active.
 *  @deprecated Use waitUntilWorkflowActive instead. waitForWorkflowActive does not throw error in non-success cases.
 */
export const waitForWorkflowActive = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetWorkflowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 30 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a workflow is active.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetWorkflowCommand for polling.
 */
export const waitUntilWorkflowActive = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetWorkflowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 30 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
