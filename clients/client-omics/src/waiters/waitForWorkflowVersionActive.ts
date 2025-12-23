// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetWorkflowVersionCommand, GetWorkflowVersionCommandInput } from "../commands/GetWorkflowVersionCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetWorkflowVersionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetWorkflowVersionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
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
 * Wait until a workflow version is active.
 *  @deprecated Use waitUntilWorkflowVersionActive instead. waitForWorkflowVersionActive does not throw error in non-success cases.
 */
export const waitForWorkflowVersionActive = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetWorkflowVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 30 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a workflow version is active.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetWorkflowVersionCommand for polling.
 */
export const waitUntilWorkflowVersionActive = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetWorkflowVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 30 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
