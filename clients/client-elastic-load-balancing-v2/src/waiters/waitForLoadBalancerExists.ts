// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
} from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";

const checkState = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeLoadBalancersCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeLoadBalancersCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "LoadBalancerNotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilLoadBalancerExists instead. waitForLoadBalancerExists does not throw error in non-success cases.
 */
export const waitForLoadBalancerExists = async (
  params: WaiterConfiguration<ElasticLoadBalancingV2Client>,
  input: DescribeLoadBalancersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeLoadBalancersCommand for polling.
 */
export const waitUntilLoadBalancerExists = async (
  params: WaiterConfiguration<ElasticLoadBalancingV2Client>,
  input: DescribeLoadBalancersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
