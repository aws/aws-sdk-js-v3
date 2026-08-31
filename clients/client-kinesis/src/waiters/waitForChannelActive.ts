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
import type { KinesisClient } from "../KinesisClient";
import type { KinesisServiceException } from "../models/KinesisServiceException";

const checkState = async (client: KinesisClient, input: DescribeChannelCommandInput): Promise<WaiterResult<DescribeChannelCommandOutput | KinesisServiceException>> => {
  let reason;
  try {
    let result: DescribeChannelCommandOutput & any = await client.send(new DescribeChannelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ChannelDescription.ChannelStatus;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ChannelDescription.ChannelStatus;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ChannelDescription.ChannelStatus;
      }
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ChannelDescription.ChannelStatus;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ChannelDescription.ChannelStatus;
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
 *
 *  @deprecated Use waitUntilChannelActive instead. waitForChannelActive does not throw error in non-success cases.
 */
export const waitForChannelActive = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult<DescribeChannelCommandOutput | KinesisServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export const waitUntilChannelActive = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult<DescribeChannelCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeChannelCommandOutput>;
};
