// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetInstanceProfileCommandInput,
  type GetInstanceProfileCommandOutput,
  GetInstanceProfileCommand,
} from "../commands/GetInstanceProfileCommand";
import type { IAMClient } from "../IAMClient";
import type { IAMServiceException } from "../models/IAMServiceException";

const checkState = async (client: IAMClient, input: GetInstanceProfileCommandInput): Promise<WaiterResult<GetInstanceProfileCommandOutput | IAMServiceException>> => {
  let reason;
  try {
    let result: GetInstanceProfileCommandOutput & any = await client.send(new GetInstanceProfileCommand(input));
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
 *  @deprecated Use waitUntilInstanceProfileExists instead. waitForInstanceProfileExists does not throw error in non-success cases.
 */
export const waitForInstanceProfileExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
): Promise<WaiterResult<GetInstanceProfileCommandOutput | IAMServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInstanceProfileCommand for polling.
 */
export const waitUntilInstanceProfileExists = async (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
): Promise<WaiterResult<GetInstanceProfileCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetInstanceProfileCommandOutput>;
};
