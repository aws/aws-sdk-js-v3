// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetChannelCommandInput,
  type GetChannelCommandOutput,
  GetChannelCommand,
} from "../commands/GetChannelCommand";
import type { RepostspaceServiceException } from "../models/RepostspaceServiceException";
import type { RepostspaceClient } from "../RepostspaceClient";

const checkState = async (client: RepostspaceClient, input: GetChannelCommandInput): Promise<WaiterResult<GetChannelCommandOutput | RepostspaceServiceException>> => {
  let reason;
  try {
    let result: GetChannelCommandOutput & any = await client.send(new GetChannelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.channelStatus;
      }
      if (returnComparator() === "CREATED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.channelStatus;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.channelStatus;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilChannelCreated instead. waitForChannelCreated does not throw error in non-success cases.
 */
export const waitForChannelCreated = async (
  params: WaiterConfiguration<RepostspaceClient>,
  input: GetChannelCommandInput
): Promise<WaiterResult<GetChannelCommandOutput | RepostspaceServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetChannelCommand for polling.
 */
export const waitUntilChannelCreated = async (
  params: WaiterConfiguration<RepostspaceClient>,
  input: GetChannelCommandInput
): Promise<WaiterResult<GetChannelCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetChannelCommandOutput>;
};
