// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeInputCommandInput,
  type DescribeInputCommandOutput,
  DescribeInputCommand,
} from "../commands/DescribeInputCommand";
import type { MediaLiveClient } from "../MediaLiveClient";
import type { MediaLiveServiceException } from "../models/MediaLiveServiceException";

const checkState = async (client: MediaLiveClient, input: DescribeInputCommandInput): Promise<WaiterResult<DescribeInputCommandOutput | MediaLiveServiceException>> => {
  let reason;
  try {
    let result: DescribeInputCommandOutput & any = await client.send(new DescribeInputCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ATTACHED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DETACHED") {
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
 * Wait until an input has been attached
 *  @deprecated Use waitUntilInputAttached instead. waitForInputAttached does not throw error in non-success cases.
 */
export const waitForInputAttached = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeInputCommandInput
): Promise<WaiterResult<DescribeInputCommandOutput | MediaLiveServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an input has been attached
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
export const waitUntilInputAttached = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeInputCommandInput
): Promise<WaiterResult<DescribeInputCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeInputCommandOutput>;
};
