// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsCommandInput,
} from "../commands/DescribeVpcPeeringConnectionsCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (
  client: EC2Client,
  input: DescribeVpcPeeringConnectionsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeVpcPeeringConnectionsCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidVpcPeeringConnectionID.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilVpcPeeringConnectionExists instead. waitForVpcPeeringConnectionExists does not throw error in non-success cases.
 */
export const waitForVpcPeeringConnectionExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpcPeeringConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVpcPeeringConnectionsCommand for polling.
 */
export const waitUntilVpcPeeringConnectionExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpcPeeringConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
