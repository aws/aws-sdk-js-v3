import { LambdaClient } from "../LambdaClient";
import { GetFunctionCommand, GetFunctionCommandInput } from "../commands/GetFunctionCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: LambdaClient, input: GetFunctionCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetFunctionCommand(input));
    return { state: WaiterState.SUCCESS };
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetFunctionCommand for polling.
 */
export const waitForFunctionExists = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
