// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import { GetPolicyEngineCommand, GetPolicyEngineCommandInput } from "../commands/GetPolicyEngineCommand";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetPolicyEngineCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetPolicyEngineCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a PolicyEngine is active
 *  @deprecated Use waitUntilPolicyEngineActive instead. waitForPolicyEngineActive does not throw error in non-success cases.
 */
export const waitForPolicyEngineActive = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyEngineCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a PolicyEngine is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyEngineCommand for polling.
 */
export const waitUntilPolicyEngineActive = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyEngineCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
