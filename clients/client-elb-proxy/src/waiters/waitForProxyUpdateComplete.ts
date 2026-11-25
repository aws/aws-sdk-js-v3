// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetProxyUpdateCommandInput,
  type GetProxyUpdateCommandOutput,
  GetProxyUpdateCommand,
} from "../commands/GetProxyUpdateCommand";
import type { ELBProxyClient } from "../ELBProxyClient";
import type { ELBProxyServiceException } from "../models/ELBProxyServiceException";

const checkState = async (client: ELBProxyClient, input: GetProxyUpdateCommandInput): Promise<WaiterResult<GetProxyUpdateCommandOutput | ELBProxyServiceException>> => {
  let reason;
  try {
    let result: GetProxyUpdateCommandOutput & any = await client.send(new GetProxyUpdateCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.state.propagationStatus;
      }
      if (returnComparator() === "complete") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state.propagationStatus;
      }
      if (returnComparator() === "failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state.propagationStatus;
      }
      if (returnComparator() === "cancelled") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state.propagationStatus;
      }
      if (returnComparator() === "skipped") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state.validationStatus;
      }
      if (returnComparator() === "invalid") {
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
 *  @deprecated Use waitUntilProxyUpdateComplete instead. waitForProxyUpdateComplete does not throw error in non-success cases.
 */
export const waitForProxyUpdateComplete = async (
  params: WaiterConfiguration<ELBProxyClient>,
  input: GetProxyUpdateCommandInput
): Promise<WaiterResult<GetProxyUpdateCommandOutput | ELBProxyServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetProxyUpdateCommand for polling.
 */
export const waitUntilProxyUpdateComplete = async (
  params: WaiterConfiguration<ELBProxyClient>,
  input: GetProxyUpdateCommandInput
): Promise<WaiterResult<GetProxyUpdateCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetProxyUpdateCommandOutput>;
};
