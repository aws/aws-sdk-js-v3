// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeChannelPlacementGroupCommand,
  DescribeChannelPlacementGroupCommandInput,
} from "../commands/DescribeChannelPlacementGroupCommand";
import { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: DescribeChannelPlacementGroupCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeChannelPlacementGroupCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InternalServerErrorException") {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
