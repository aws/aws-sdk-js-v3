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
  type GetPolicyEngineCommandInput,
  type GetPolicyEngineCommandOutput,
  GetPolicyEngineCommand,
} from "../commands/GetPolicyEngineCommand";
import type { BedrockAgentCoreControlServiceException } from "../models/BedrockAgentCoreControlServiceException";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetPolicyEngineCommandInput): Promise<WaiterResult<GetPolicyEngineCommandOutput | BedrockAgentCoreControlServiceException>> => {
  let reason;
  try {
    let result: GetPolicyEngineCommandOutput & any = await client.send(new GetPolicyEngineCommand(input));
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
): Promise<WaiterResult<GetPolicyEngineCommandOutput | BedrockAgentCoreControlServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
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
): Promise<WaiterResult<GetPolicyEngineCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetPolicyEngineCommandOutput>;
};
