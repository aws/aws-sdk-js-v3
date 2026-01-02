// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import { GetMemoryCommand, GetMemoryCommandInput } from "../commands/GetMemoryCommand";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetMemoryCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetMemoryCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.memory.status;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.memory.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.memory.status;
      }
      if (returnComparator() === "FAILED") {
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
 *  @deprecated Use waitUntilMemoryCreated instead. waitForMemoryCreated does not throw error in non-success cases.
 */
export const waitForMemoryCreated = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetMemoryCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetMemoryCommand for polling.
 */
export const waitUntilMemoryCreated = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetMemoryCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
