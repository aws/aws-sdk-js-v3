// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import { GetPolicyGenerationCommand, GetPolicyGenerationCommandInput } from "../commands/GetPolicyGenerationCommand";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetPolicyGenerationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetPolicyGenerationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "GENERATED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "GENERATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "GENERATE_FAILED") {
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
 * Wait until policy generation is completed
 *  @deprecated Use waitUntilPolicyGenerationCompleted instead. waitForPolicyGenerationCompleted does not throw error in non-success cases.
 */
export const waitForPolicyGenerationCompleted = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyGenerationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until policy generation is completed
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyGenerationCommand for polling.
 */
export const waitUntilPolicyGenerationCompleted = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyGenerationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
