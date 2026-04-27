// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetRoleCommandInput, type GetRoleCommandOutput, GetRoleCommand } from "../commands/GetRoleCommand";
import type { IAMClient } from "../IAMClient";
import type { IAMServiceException } from "../models/IAMServiceException";

const checkState = async (client: IAMClient, input: GetRoleCommandInput): Promise<WaiterResult<GetRoleCommandOutput | IAMServiceException>> => {
  let reason;
  try {
    let result: GetRoleCommandOutput & any = await client.send(new GetRoleCommand(input));
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
 *  @deprecated Use waitUntilRoleExists instead. waitForRoleExists does not throw error in non-success cases.
 */
export const waitForRoleExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetRoleCommandInput
): Promise<WaiterResult<GetRoleCommandOutput | IAMServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRoleCommand for polling.
 */
export const waitUntilRoleExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetRoleCommandInput
): Promise<WaiterResult<GetRoleCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRoleCommandOutput>;
};
