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
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  GetPolicyCommand,
} from "../commands/GetPolicyCommand";
import type { BedrockAgentCoreControlServiceException } from "../models/BedrockAgentCoreControlServiceException";

const checkState = async (client: BedrockAgentCoreControlClient, input: GetPolicyCommandInput): Promise<WaiterResult<GetPolicyCommandOutput | BedrockAgentCoreControlServiceException>> => {
  let reason;
  try {
    let result: GetPolicyCommandOutput & any = await client.send(new GetPolicyCommand(input));
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
 * Wait until a Policy is active
 *  @deprecated Use waitUntilPolicyActive instead. waitForPolicyActive does not throw error in non-success cases.
 */
export const waitForPolicyActive = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult<GetPolicyCommandOutput | BedrockAgentCoreControlServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Policy is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyCommand for polling.
 */
export const waitUntilPolicyActive = async (
  params: WaiterConfiguration<BedrockAgentCoreControlClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult<GetPolicyCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetPolicyCommandOutput>;
};
