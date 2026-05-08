// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  type GetPolicyEngineCommandInput,
  type GetPolicyEngineCommandOutput,
  GetPolicyEngineCommand,
} from "../commands/GetPolicyEngineCommand";
import type { BedrockAgentCoreControlServiceException } from "../models/BedrockAgentCoreControlServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetPolicyEngineCommandInput): Promise<WaiterResult<GetPolicyEngineCommandOutput | BedrockAgentCoreControlServiceException>> => {
  let reason;
  try {
    let result: GetPolicyEngineCommandOutput & any = await client.send(new GetPolicyEngineCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
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
    if (exception.name === "ResourceNotFoundException") {
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
): Promise<WaiterResult<GetPolicyEngineCommandOutput | BedrockAgentCoreControlServiceException>> => {
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
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
