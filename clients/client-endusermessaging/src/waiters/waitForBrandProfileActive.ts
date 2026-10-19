// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetBrandProfileCommandInput,
  type GetBrandProfileCommandOutput,
  GetBrandProfileCommand,
} from "../commands/GetBrandProfileCommand";
import type { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingServiceException } from "../models/EndUserMessagingServiceException";

const checkState = async (client: EndUserMessagingClient, input: GetBrandProfileCommandInput): Promise<WaiterResult<GetBrandProfileCommandOutput | EndUserMessagingServiceException>> => {
  let reason;
  try {
    let result: GetBrandProfileCommandOutput & any = await client.send(new GetBrandProfileCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "BLOCKED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a brand profile reaches the ACTIVE state.
 *  @deprecated Use waitUntilBrandProfileActive instead. waitForBrandProfileActive does not throw error in non-success cases.
 */
export const waitForBrandProfileActive = async (
  params: WaiterConfiguration<EndUserMessagingClient>,
  input: GetBrandProfileCommandInput
): Promise<WaiterResult<GetBrandProfileCommandOutput | EndUserMessagingServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a brand profile reaches the ACTIVE state.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetBrandProfileCommand for polling.
 */
export const waitUntilBrandProfileActive = async (
  params: WaiterConfiguration<EndUserMessagingClient>,
  input: GetBrandProfileCommandInput
): Promise<WaiterResult<GetBrandProfileCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetBrandProfileCommandOutput>;
};
