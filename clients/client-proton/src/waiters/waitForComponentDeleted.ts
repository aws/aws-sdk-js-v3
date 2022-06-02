// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetComponentCommand, GetComponentCommandInput } from "../commands/GetComponentCommand";
import { ProtonClient } from "../ProtonClient";

const checkState = async (client: ProtonClient, input: GetComponentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetComponentCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.component.deploymentStatus;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Component is deleted. Use this after invoking DeleteComponent
 *  @deprecated Use waitUntilComponentDeleted instead. waitForComponentDeleted does not throw error in non-success cases.
 */
export const waitForComponentDeleted = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetComponentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Component is deleted. Use this after invoking DeleteComponent
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetComponentCommand for polling.
 */
export const waitUntilComponentDeleted = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetComponentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
