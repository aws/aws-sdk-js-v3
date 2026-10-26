// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetSourceEndpointCommandInput,
  type GetSourceEndpointCommandOutput,
  GetSourceEndpointCommand,
} from "../commands/GetSourceEndpointCommand";
import type { MediaConnectClient } from "../MediaConnectClient";
import type { MediaConnectServiceException } from "../models/MediaConnectServiceException";

const checkState = async (client: MediaConnectClient, input: GetSourceEndpointCommandInput): Promise<WaiterResult<GetSourceEndpointCommandOutput | MediaConnectServiceException>> => {
  let reason;
  try {
    let result: GetSourceEndpointCommandOutput & any = await client.send(new GetSourceEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.SourceEndpoint.ConnectionState;
      }
      if (returnComparator() === "DISCONNECTING") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.SourceEndpoint.ConnectionState;
      }
      if (returnComparator() === "DISCONNECTED") {
        return { state: WaiterState.SUCCESS, reason };
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
    if (exception.name === "TooManyRequestsException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until the Source Endpoint has begun disconnecting
 *  @deprecated Use waitUntilSourceEndpointDisconnecting instead. waitForSourceEndpointDisconnecting does not throw error in non-success cases.
 */
export const waitForSourceEndpointDisconnecting = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetSourceEndpointCommandInput
): Promise<WaiterResult<GetSourceEndpointCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Source Endpoint has begun disconnecting
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSourceEndpointCommand for polling.
 */
export const waitUntilSourceEndpointDisconnecting = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetSourceEndpointCommandInput
): Promise<WaiterResult<GetSourceEndpointCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetSourceEndpointCommandOutput>;
};
