import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
} from "../commands/DescribeLoadBalancersCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeLoadBalancersCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeLoadBalancersCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.LoadBalancers);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State.Code;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "active";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.LoadBalancers);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State.Code;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "provisioning") {
          return { state: WaiterState.RETRY, reason };
        }
      }
    } catch (e) {}
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
 *  @deprecated Use waitUntilLoadBalancerAvailable instead. waitForLoadBalancerAvailable does not throw error in non-success cases.
 */
export const waitForLoadBalancerAvailable = async (
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
export const waitUntilLoadBalancerAvailable = async (
  params: WaiterConfiguration<ElasticLoadBalancingV2Client>,
  input: DescribeLoadBalancersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
