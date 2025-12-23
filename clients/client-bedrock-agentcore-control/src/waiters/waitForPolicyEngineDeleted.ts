// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import { GetPolicyEngineCommand, GetPolicyEngineCommandInput } from "../commands/GetPolicyEngineCommand";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetPolicyEngineCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetPolicyEngineCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      }
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
 * Wait until a PolicyEngine is deleted
 *  @deprecated Use waitUntilPolicyEngineDeleted instead. waitForPolicyEngineDeleted does not throw error in non-success cases.
 */
export const waitForPolicyEngineDeleted = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyEngineCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a PolicyEngine is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyEngineCommand for polling.
 */
export const waitUntilPolicyEngineDeleted = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyEngineCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
