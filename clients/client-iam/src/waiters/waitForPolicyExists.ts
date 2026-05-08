// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  GetPolicyCommand,
} from "../commands/GetPolicyCommand";
import type { IAMClient } from "../IAMClient";
import type { IAMServiceException } from "../models/IAMServiceException";

const checkState = async (client: IAMClient, input: GetPolicyCommandInput): Promise<WaiterResult<GetPolicyCommandOutput | IAMServiceException>> => {
  let reason;
  try {
    let result: GetPolicyCommandOutput & any = await client.send(new GetPolicyCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name === "NoSuchEntityException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPolicyExists instead. waitForPolicyExists does not throw error in non-success cases.
 */
export const waitForPolicyExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult<GetPolicyCommandOutput | IAMServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyCommand for polling.
 */
export const waitUntilPolicyExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetPolicyCommandInput
): Promise<WaiterResult<GetPolicyCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetPolicyCommandOutput>;
};
