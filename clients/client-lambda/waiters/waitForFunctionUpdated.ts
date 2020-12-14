import { LambdaClient } from "../LambdaClient";
import {
  GetFunctionConfigurationCommand,
  GetFunctionConfigurationCommandInput,
} from "../commands/GetFunctionConfigurationCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: LambdaClient, input: GetFunctionConfigurationCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetFunctionConfigurationCommand(input));
    try {
      let returnComparator = () => {
        return result.LastUpdateStatus;
      };
      if (returnComparator() === "Successful") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.LastUpdateStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.LastUpdateStatus;
      };
      if (returnComparator() === "InProgress") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Waits for the function's LastUpdateStatus to be Successful.
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetFunctionConfigurationCommand for polling.
 */
export const waitForFunctionUpdated = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionConfigurationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
