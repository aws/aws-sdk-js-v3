// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

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
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "OutOfService";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidInstance") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceDeregistered instead. waitForInstanceDeregistered does not throw error in non-success cases.
 */
export const waitForInstanceDeregistered = async (
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
export const waitUntilInstanceDeregistered = async (
  params: WaiterConfiguration<ElasticLoadBalancingClient>,
  input: DescribeInstanceHealthCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
