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
import type { NotFoundException } from "../models/errors";
import type { MediaConnectServiceException } from "../models/MediaConnectServiceException";

const checkState = async (client: MediaConnectClient, input: GetSourceEndpointCommandInput): Promise<WaiterResult<GetSourceEndpointCommandOutput | MediaConnectServiceException>> => {
  let reason;
  try {
    let result: GetSourceEndpointCommandOutput & any = await client.send(new GetSourceEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.SourceEndpoint.RegistrationState;
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
 * Wait until the Source Endpoint is deregistered
 *  @deprecated Use waitUntilSourceEndpointDeregistered instead. waitForSourceEndpointDeregistered does not throw error in non-success cases.
 */
export const waitForSourceEndpointDeregistered = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetSourceEndpointCommandInput
): Promise<WaiterResult<GetSourceEndpointCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Source Endpoint is deregistered
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSourceEndpointCommand for polling.
 */
export const waitUntilSourceEndpointDeregistered = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetSourceEndpointCommandInput
): Promise<WaiterResult<NotFoundException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<NotFoundException>;
};
