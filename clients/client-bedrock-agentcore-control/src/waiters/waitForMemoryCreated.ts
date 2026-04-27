// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  type GetMemoryCommandInput,
  type GetMemoryCommandOutput,
  GetMemoryCommand,
} from "../commands/GetMemoryCommand";
import type { BedrockAgentCoreControlServiceException } from "../models/BedrockAgentCoreControlServiceException";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetMemoryCommandInput): Promise<WaiterResult<GetMemoryCommandOutput | BedrockAgentCoreControlServiceException>> => {
  let reason;
  try {
    let result: GetMemoryCommandOutput & any = await client.send(new GetMemoryCommand(input));
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
): Promise<WaiterResult<GetMemoryCommandOutput | BedrockAgentCoreControlServiceException>> => {
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
): Promise<WaiterResult<GetMemoryCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetMemoryCommandOutput>;
};
