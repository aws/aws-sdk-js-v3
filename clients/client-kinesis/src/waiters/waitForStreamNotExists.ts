// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type DescribeStreamCommandInput, DescribeStreamCommand } from "../commands/DescribeStreamCommand";
import type { KinesisClient } from "../KinesisClient";

const checkState = async (client: KinesisClient, input: DescribeStreamCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeStreamCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilStreamNotExists instead. waitForStreamNotExists does not throw error in non-success cases.
 */
export const waitForStreamNotExists = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStreamCommand for polling.
 */
export const waitUntilStreamNotExists = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
