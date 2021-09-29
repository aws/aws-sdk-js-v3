import { IAMClient } from "../IAMClient";
import { GetRoleCommand, GetRoleCommandInput } from "../commands/GetRoleCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: IAMClient, input: GetRoleCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetRoleCommand(input));
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
 *  @deprecated Use waitUntilRoleExists instead. waitForRoleExists does not throw error in non-success cases.
 */
export const waitForRoleExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetRoleCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRoleCommand for polling.
 */
export const waitUntilRoleExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetRoleCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
