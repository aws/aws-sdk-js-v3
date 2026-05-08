// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeVpcsCommandInput,
  type DescribeVpcsCommandOutput,
  DescribeVpcsCommand,
} from "../commands/DescribeVpcsCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeVpcsCommandInput): Promise<WaiterResult<DescribeVpcsCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeVpcsCommandOutput & any = await client.send(new DescribeVpcsCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name === "InvalidVpcID.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilVpcExists instead. waitForVpcExists does not throw error in non-success cases.
 */
export const waitForVpcExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpcsCommandInput
): Promise<WaiterResult<DescribeVpcsCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVpcsCommand for polling.
 */
export const waitUntilVpcExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpcsCommandInput
): Promise<WaiterResult<DescribeVpcsCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeVpcsCommandOutput>;
};
