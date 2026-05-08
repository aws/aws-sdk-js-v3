// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  DescribeLoadBalancersCommand,
} from "../commands/DescribeLoadBalancersCommand";
import type { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import type { ElasticLoadBalancingV2ServiceException } from "../models/ElasticLoadBalancingV2ServiceException";
import type { LoadBalancerNotFoundException } from "../models/errors";

const checkState = async (client: ElasticLoadBalancingV2Client, input: DescribeLoadBalancersCommandInput): Promise<WaiterResult<DescribeLoadBalancersCommandOutput | ElasticLoadBalancingV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeLoadBalancersCommandOutput & any = await client.send(new DescribeLoadBalancersCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.LoadBalancers);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State.Code;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "active")
      }
      if (allStringEq_5) {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "LoadBalancerNotFoundException") {
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
): Promise<WaiterResult<DescribeLoadBalancersCommandOutput | ElasticLoadBalancingV2ServiceException>> => {
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
): Promise<WaiterResult<LoadBalancerNotFoundException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<LoadBalancerNotFoundException>;
};
