// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetPolicyCommand, GetPolicyCommandInput } from "../commands/GetPolicyCommand";
import { IAMClient } from "../IAMClient";

const checkState = async (client: IAMClient, input: GetPolicyCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetPolicyCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NoSuchEntity") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPolicyExists instead. waitForPolicyExists does not throw error in non-success cases.
 */
export const waitForPolicyExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyCommand for polling.
 */
export const waitUntilPolicyExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
