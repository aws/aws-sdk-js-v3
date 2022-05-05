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
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.LoadBalancers);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.State.Code;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "active";
      }
      if (allStringEq_5) {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "LoadBalancerNotFound") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilLoadBalancersDeleted instead. waitForLoadBalancersDeleted does not throw error in non-success cases.
 */
export const waitForLoadBalancersDeleted = async (
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
export const waitUntilLoadBalancersDeleted = async (
  params: WaiterConfiguration<ElasticLoadBalancingV2Client>,
  input: DescribeLoadBalancersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
