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

const checkState = async (client: ELBProxyClient, input: GetProxyCommandInput): Promise<WaiterResult<GetProxyCommandOutput | ELBProxyServiceException>> => {
  let reason;
  try {
    let result: GetProxyCommandOutput & any = await client.send(new GetProxyCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status.code;
      }
      if (returnComparator() === "active") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status.code;
      }
      if (returnComparator() === "create-failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status.code;
      }
      if (returnComparator() === "action-required") {
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
 *  @deprecated Use waitUntilProxyActive instead. waitForProxyActive does not throw error in non-success cases.
 */
export const waitForProxyActive = async (
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
export const waitUntilProxyActive = async (
  params: WaiterConfiguration<ELBProxyClient>,
  input: GetProxyCommandInput
): Promise<WaiterResult<GetProxyCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetProxyCommandOutput>;
};
