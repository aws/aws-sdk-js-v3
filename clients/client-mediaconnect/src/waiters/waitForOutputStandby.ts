// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetRouterOutputCommandInput,
  type GetRouterOutputCommandOutput,
  GetRouterOutputCommand,
} from "../commands/GetRouterOutputCommand";
import type { MediaConnectClient } from "../MediaConnectClient";
import type { MediaConnectServiceException } from "../models/MediaConnectServiceException";

const checkState = async (client: MediaConnectClient, input: GetRouterOutputCommandInput): Promise<WaiterResult<GetRouterOutputCommandOutput | MediaConnectServiceException>> => {
  let reason;
  try {
    let result: GetRouterOutputCommandOutput & any = await client.send(new GetRouterOutputCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.RouterOutput.State;
      }
      if (returnComparator() === "STANDBY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterOutput.State;
      }
      if (returnComparator() === "STOPPING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterOutput.State;
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
 * Wait until the Output is STANDBY
 *  @deprecated Use waitUntilOutputStandby instead. waitForOutputStandby does not throw error in non-success cases.
 */
export const waitForOutputStandby = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult<GetRouterOutputCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Output is STANDBY
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterOutputCommand for polling.
 */
export const waitUntilOutputStandby = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult<GetRouterOutputCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRouterOutputCommandOutput>;
};
