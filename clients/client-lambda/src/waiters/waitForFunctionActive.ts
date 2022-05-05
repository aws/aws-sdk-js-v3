// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetFunctionConfigurationCommand,
  GetFunctionConfigurationCommandInput,
} from "../commands/GetFunctionConfigurationCommand";
import { LambdaClient } from "../LambdaClient";

const checkState = async (client: LambdaClient, input: GetFunctionConfigurationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetFunctionConfigurationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "Active") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "Pending") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits for the function's State to be Active. This waiter uses GetFunctionConfiguration API. This should be used after new function creation.
 *  @deprecated Use waitUntilFunctionActive instead. waitForFunctionActive does not throw error in non-success cases.
 */
export const waitForFunctionActive = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionConfigurationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits for the function's State to be Active. This waiter uses GetFunctionConfiguration API. This should be used after new function creation.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionConfigurationCommand for polling.
 */
export const waitUntilFunctionActive = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionConfigurationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
