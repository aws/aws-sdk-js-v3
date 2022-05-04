// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeInstanceHealthCommand,
  DescribeInstanceHealthCommandInput,
} from "../commands/DescribeInstanceHealthCommand";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";

const checkState = async (
  client: ElasticLoadBalancingClient,
  input: DescribeInstanceHealthCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeInstanceHealthCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.InstanceStates);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "InService") {
          return { state: WaiterState.SUCCESS, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAnyInstanceInService instead. waitForAnyInstanceInService does not throw error in non-success cases.
 */
export const waitForAnyInstanceInService = async (
  params: WaiterConfiguration<ElasticLoadBalancingClient>,
  input: DescribeInstanceHealthCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceHealthCommand for polling.
 */
export const waitUntilAnyInstanceInService = async (
  params: WaiterConfiguration<ElasticLoadBalancingClient>,
  input: DescribeInstanceHealthCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
