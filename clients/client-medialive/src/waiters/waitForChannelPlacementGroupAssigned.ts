// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeChannelPlacementGroupCommandInput,
  DescribeChannelPlacementGroupCommand,
} from "../commands/DescribeChannelPlacementGroupCommand";
import type { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: DescribeChannelPlacementGroupCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeChannelPlacementGroupCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ASSIGNED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ASSIGNING") {
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
 * Wait until the channel placement group has been assigned
 *  @deprecated Use waitUntilChannelPlacementGroupAssigned instead. waitForChannelPlacementGroupAssigned does not throw error in non-success cases.
 */
export const waitForChannelPlacementGroupAssigned = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelPlacementGroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the channel placement group has been assigned
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelPlacementGroupCommand for polling.
 */
export const waitUntilChannelPlacementGroupAssigned = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelPlacementGroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
