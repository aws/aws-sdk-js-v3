// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CodeDeployClient } from "../CodeDeployClient";
import { GetDeploymentCommand, GetDeploymentCommandInput } from "../commands/GetDeploymentCommand";

const checkState = async (client: CodeDeployClient, input: GetDeploymentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetDeploymentCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Stopped") {
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
 *  @deprecated Use waitUntilDeploymentSuccessful instead. waitForDeploymentSuccessful does not throw error in non-success cases.
 */
export const waitForDeploymentSuccessful = async (
  params: WaiterConfiguration<CodeDeployClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDeploymentCommand for polling.
 */
export const waitUntilDeploymentSuccessful = async (
  params: WaiterConfiguration<CodeDeployClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
