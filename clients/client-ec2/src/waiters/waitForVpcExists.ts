// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeVpcsCommand, DescribeVpcsCommandInput } from "../commands/DescribeVpcsCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeVpcsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeVpcsCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidVpcID.NotFound") {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
