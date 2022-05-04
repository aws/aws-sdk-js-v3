// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetFunctionCommand, GetFunctionCommandInput } from "../commands/GetFunctionCommand";
import { LambdaClient } from "../LambdaClient";

const checkState = async (client: LambdaClient, input: GetFunctionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetFunctionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Configuration.LastUpdateStatus;
      };
      if (returnComparator() === "Successful") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Configuration.LastUpdateStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Configuration.LastUpdateStatus;
      };
      if (returnComparator() === "InProgress") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits for the function's LastUpdateStatus to be Successful. This waiter uses GetFunction API. This should be used after function updates.
 *  @deprecated Use waitUntilFunctionUpdatedV2 instead. waitForFunctionUpdatedV2 does not throw error in non-success cases.
 */
export const waitForFunctionUpdatedV2 = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits for the function's LastUpdateStatus to be Successful. This waiter uses GetFunction API. This should be used after function updates.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionCommand for polling.
 */
export const waitUntilFunctionUpdatedV2 = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
