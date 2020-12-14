import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";
import {
  DescribeInstanceHealthCommand,
  DescribeInstanceHealthCommandInput,
} from "../commands/DescribeInstanceHealthCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ElasticLoadBalancingClient,
  input: DescribeInstanceHealthCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeInstanceHealthCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.InstanceStates);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "InService") {
          return { state: WaiterState.SUCCESS };
        }
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeInstanceHealthCommand for polling.
 */
export const waitForAnyInstanceInService = async (
  params: WaiterConfiguration<ElasticLoadBalancingClient>,
  input: DescribeInstanceHealthCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
