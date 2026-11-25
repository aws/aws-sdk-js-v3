// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetProxyCommandInput, type GetProxyCommandOutput, GetProxyCommand } from "../commands/GetProxyCommand";
import type { ELBProxyClient } from "../ELBProxyClient";
import type { ELBProxyServiceException } from "../models/ELBProxyServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: ELBProxyClient, input: GetProxyCommandInput): Promise<WaiterResult<GetProxyCommandOutput | ELBProxyServiceException>> => {
  let reason;
  try {
    let result: GetProxyCommandOutput & any = await client.send(new GetProxyCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilProxyDeleted instead. waitForProxyDeleted does not throw error in non-success cases.
 */
export const waitForProxyDeleted = async (
  params: WaiterConfiguration<ELBProxyClient>,
  input: GetProxyCommandInput
): Promise<WaiterResult<GetProxyCommandOutput | ELBProxyServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetProxyCommand for polling.
 */
export const waitUntilProxyDeleted = async (
  params: WaiterConfiguration<ELBProxyClient>,
  input: GetProxyCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
