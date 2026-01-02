// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { AppConfigClient } from "../AppConfigClient";
import { GetDeploymentCommand, GetDeploymentCommandInput } from "../commands/GetDeploymentCommand";

const checkState = async (client: AppConfigClient, input: GetDeploymentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetDeploymentCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ROLLED_BACK") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "REVERTED") {
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
 *  @deprecated Use waitUntilDeploymentComplete instead. waitForDeploymentComplete does not throw error in non-success cases.
 */
export const waitForDeploymentComplete = async (
  params: WaiterConfiguration<AppConfigClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDeploymentCommand for polling.
 */
export const waitUntilDeploymentComplete = async (
  params: WaiterConfiguration<AppConfigClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
