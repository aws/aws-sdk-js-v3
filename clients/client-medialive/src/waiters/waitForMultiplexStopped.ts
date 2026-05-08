// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeMultiplexCommandInput,
  type DescribeMultiplexCommandOutput,
  DescribeMultiplexCommand,
} from "../commands/DescribeMultiplexCommand";
import type { MediaLiveClient } from "../MediaLiveClient";
import type { MediaLiveServiceException } from "../models/MediaLiveServiceException";

const checkState = async (client: MediaLiveClient, input: DescribeMultiplexCommandInput): Promise<WaiterResult<DescribeMultiplexCommandOutput | MediaLiveServiceException>> => {
  let reason;
  try {
    let result: DescribeMultiplexCommandOutput & any = await client.send(new DescribeMultiplexCommand(input));
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
      if (returnComparator() === "STOPPING") {
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
 * Wait until a multiplex has is stopped
 *  @deprecated Use waitUntilMultiplexStopped instead. waitForMultiplexStopped does not throw error in non-success cases.
 */
export const waitForMultiplexStopped = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult<DescribeMultiplexCommandOutput | MediaLiveServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a multiplex has is stopped
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export const waitUntilMultiplexStopped = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult<DescribeMultiplexCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeMultiplexCommandOutput>;
};
