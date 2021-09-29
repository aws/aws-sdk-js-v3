import { IAMClient } from "../IAMClient";
import { GetInstanceProfileCommand, GetInstanceProfileCommandInput } from "../commands/GetInstanceProfileCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: IAMClient, input: GetInstanceProfileCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetInstanceProfileCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NoSuchEntityException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceProfileExists instead. waitForInstanceProfileExists does not throw error in non-success cases.
 */
export const waitForInstanceProfileExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInstanceProfileCommand for polling.
 */
export const waitUntilInstanceProfileExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
