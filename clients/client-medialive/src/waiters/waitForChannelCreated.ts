// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeChannelCommandInput,
  type DescribeChannelCommandOutput,
  DescribeChannelCommand,
} from "../commands/DescribeChannelCommand";
import type { MediaLiveClient } from "../MediaLiveClient";
import type { MediaLiveServiceException } from "../models/MediaLiveServiceException";

const checkState = async (client: MediaLiveClient, input: DescribeChannelCommandInput): Promise<WaiterResult<DescribeChannelCommandOutput | MediaLiveServiceException>> => {
  let reason;
  try {
    let result: DescribeChannelCommandOutput & any = await client.send(new DescribeChannelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "IDLE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a channel has been created
 *  @deprecated Use waitUntilChannelCreated instead. waitForChannelCreated does not throw error in non-success cases.
 */
export const waitForChannelCreated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult<DescribeChannelCommandOutput | MediaLiveServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a channel has been created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export const waitUntilChannelCreated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult<DescribeChannelCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeChannelCommandOutput>;
};
