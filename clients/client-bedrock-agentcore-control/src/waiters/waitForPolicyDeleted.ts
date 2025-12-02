// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import { GetPolicyCommand, GetPolicyCommandInput } from "../commands/GetPolicyCommand";

const checkState = async (
  client: BedrockAgentCoreControlClient,
  input: GetPolicyCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetPolicyCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
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
 * Wait until a Policy is deleted
 *  @deprecated Use waitUntilPolicyDeleted instead. waitForPolicyDeleted does not throw error in non-success cases.
 */
export const waitForPolicyDeleted = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Policy is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyCommand for polling.
 */
export const waitUntilPolicyDeleted = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
