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
        return result.RouterOutput.RoutedState;
      }
      if (returnComparator() === "UNROUTED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterOutput.RoutedState;
      }
      if (returnComparator() === "ROUTING") {
        return { state: WaiterState.RETRY, reason };
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
 * Wait until the Output is UNROUTED
 *  @deprecated Use waitUntilOutputUnrouted instead. waitForOutputUnrouted does not throw error in non-success cases.
 */
export const waitForOutputUnrouted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult<GetRouterOutputCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Output is UNROUTED
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterOutputCommand for polling.
 */
export const waitUntilOutputUnrouted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult<GetRouterOutputCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRouterOutputCommandOutput>;
};
