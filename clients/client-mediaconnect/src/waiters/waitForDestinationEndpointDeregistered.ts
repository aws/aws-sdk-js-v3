// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetDestinationEndpointCommandInput,
  type GetDestinationEndpointCommandOutput,
  GetDestinationEndpointCommand,
} from "../commands/GetDestinationEndpointCommand";
import type { MediaConnectClient } from "../MediaConnectClient";
import type { NotFoundException } from "../models/errors";
import type { MediaConnectServiceException } from "../models/MediaConnectServiceException";

const checkState = async (client: MediaConnectClient, input: GetDestinationEndpointCommandInput): Promise<WaiterResult<GetDestinationEndpointCommandOutput | MediaConnectServiceException>> => {
  let reason;
  try {
    let result: GetDestinationEndpointCommandOutput & any = await client.send(new GetDestinationEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.DestinationEndpoint.RegistrationState;
      }
      if (returnComparator() === "REGISTRATION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "NotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
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
 * Wait until the Destination Endpoint is deregistered
 *  @deprecated Use waitUntilDestinationEndpointDeregistered instead. waitForDestinationEndpointDeregistered does not throw error in non-success cases.
 */
export const waitForDestinationEndpointDeregistered = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetDestinationEndpointCommandInput
): Promise<WaiterResult<GetDestinationEndpointCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Destination Endpoint is deregistered
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDestinationEndpointCommand for polling.
 */
export const waitUntilDestinationEndpointDeregistered = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetDestinationEndpointCommandInput
): Promise<WaiterResult<NotFoundException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<NotFoundException>;
};
