// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeChannelPlacementGroupCommandInput,
  type DescribeChannelPlacementGroupCommandOutput,
  DescribeChannelPlacementGroupCommand,
} from "../commands/DescribeChannelPlacementGroupCommand";
import type { MediaLiveClient } from "../MediaLiveClient";
import type { MediaLiveServiceException } from "../models/MediaLiveServiceException";

const checkState = async (client: MediaLiveClient, input: DescribeChannelPlacementGroupCommandInput): Promise<WaiterResult<DescribeChannelPlacementGroupCommandOutput | MediaLiveServiceException>> => {
  let reason;
  try {
    let result: DescribeChannelPlacementGroupCommandOutput & any = await client.send(new DescribeChannelPlacementGroupCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
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
 * Wait until the channel placement group has been deleted
 *  @deprecated Use waitUntilChannelPlacementGroupDeleted instead. waitForChannelPlacementGroupDeleted does not throw error in non-success cases.
 */
export const waitForChannelPlacementGroupDeleted = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelPlacementGroupCommandInput
): Promise<WaiterResult<DescribeChannelPlacementGroupCommandOutput | MediaLiveServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the channel placement group has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelPlacementGroupCommand for polling.
 */
export const waitUntilChannelPlacementGroupDeleted = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelPlacementGroupCommandInput
): Promise<WaiterResult<DescribeChannelPlacementGroupCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeChannelPlacementGroupCommandOutput>;
};
