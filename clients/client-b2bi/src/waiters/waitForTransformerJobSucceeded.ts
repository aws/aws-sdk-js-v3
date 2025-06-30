// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { B2biClient } from "../B2biClient";
import { GetTransformerJobCommand, GetTransformerJobCommandInput } from "../commands/GetTransformerJobCommand";

const checkState = async (client: B2biClient, input: GetTransformerJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetTransformerJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "succeeded") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "failed") {
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
 *  @deprecated Use waitUntilTransformerJobSucceeded instead. waitForTransformerJobSucceeded does not throw error in non-success cases.
 */
export const waitForTransformerJobSucceeded = async (
  params: WaiterConfiguration<B2biClient>,
  input: GetTransformerJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetTransformerJobCommand for polling.
 */
export const waitUntilTransformerJobSucceeded = async (
  params: WaiterConfiguration<B2biClient>,
  input: GetTransformerJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
