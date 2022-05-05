// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetFunctionCommand, GetFunctionCommandInput } from "../commands/GetFunctionCommand";
import { LambdaClient } from "../LambdaClient";

const checkState = async (client: LambdaClient, input: GetFunctionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetFunctionCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilFunctionExists instead. waitForFunctionExists does not throw error in non-success cases.
 */
export const waitForFunctionExists = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionCommand for polling.
 */
export const waitUntilFunctionExists = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
