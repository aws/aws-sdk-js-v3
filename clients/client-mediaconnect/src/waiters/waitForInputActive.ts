// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetRouterInputCommandInput,
  type GetRouterInputCommandOutput,
  GetRouterInputCommand,
} from "../commands/GetRouterInputCommand";
import type { MediaConnectClient } from "../MediaConnectClient";
import type { MediaConnectServiceException } from "../models/MediaConnectServiceException";

const checkState = async (client: MediaConnectClient, input: GetRouterInputCommandInput): Promise<WaiterResult<GetRouterInputCommandOutput | MediaConnectServiceException>> => {
  let reason;
  try {
    let result: GetRouterInputCommandOutput & any = await client.send(new GetRouterInputCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "STARTING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "MIGRATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name === "ServiceUnavailableException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until the Input is ACTIVE
 *  @deprecated Use waitUntilInputActive instead. waitForInputActive does not throw error in non-success cases.
 */
export const waitForInputActive = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterInputCommandInput
): Promise<WaiterResult<GetRouterInputCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Input is ACTIVE
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterInputCommand for polling.
 */
export const waitUntilInputActive = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterInputCommandInput
): Promise<WaiterResult<GetRouterInputCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRouterInputCommandOutput>;
};
