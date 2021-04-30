import { CodeDeployClient } from "../CodeDeployClient";
import { GetDeploymentCommand, GetDeploymentCommandInput } from "../commands/GetDeploymentCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: CodeDeployClient, input: GetDeploymentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetDeploymentCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
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
 *  @deprecated in favor of waitUntilDeploymentSuccessful. This does not throw on failure.
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetDeploymentCommand for polling.
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
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetDeploymentCommand for polling.
 */
export const waitUntilDeploymentSuccessful = async (
  params: WaiterConfiguration<CodeDeployClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
