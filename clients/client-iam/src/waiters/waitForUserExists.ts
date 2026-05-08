// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetUserCommandInput, type GetUserCommandOutput, GetUserCommand } from "../commands/GetUserCommand";
import type { IAMClient } from "../IAMClient";
import type { IAMServiceException } from "../models/IAMServiceException";

const checkState = async (client: IAMClient, input: GetUserCommandInput): Promise<WaiterResult<GetUserCommandOutput | IAMServiceException>> => {
  let reason;
  try {
    let result: GetUserCommandOutput & any = await client.send(new GetUserCommand(input));
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
 *  @deprecated Use waitUntilUserExists instead. waitForUserExists does not throw error in non-success cases.
 */
export const waitForUserExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetUserCommandInput
): Promise<WaiterResult<GetUserCommandOutput | IAMServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetUserCommand for polling.
 */
export const waitUntilUserExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetUserCommandInput
): Promise<WaiterResult<GetUserCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetUserCommandOutput>;
};
