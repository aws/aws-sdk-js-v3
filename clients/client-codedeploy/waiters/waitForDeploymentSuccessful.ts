import { CodeDeployClient } from "../CodeDeployClient";
import { GetDeploymentCommand, GetDeploymentCommandInput } from "../commands/GetDeploymentCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: CodeDeployClient, input: GetDeploymentCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetDeploymentCommand(input));
    try {
      let returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.deploymentInfo.status;
      };
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
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
