import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { DescribeTargetHealthCommand, DescribeTargetHealthCommandInput } from "../commands/DescribeTargetHealthCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeTargetHealthCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeTargetHealthCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.TargetHealthDescriptions);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.TargetHealth.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "unused";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidTarget") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilTargetDeregistered instead. waitForTargetDeregistered does not throw error in non-success cases.
 */
export const waitForTargetDeregistered = async (
  params: WaiterConfiguration<ElasticLoadBalancingV2Client>,
  input: DescribeTargetHealthCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTargetHealthCommand for polling.
 */
export const waitUntilTargetDeregistered = async (
  params: WaiterConfiguration<ElasticLoadBalancingV2Client>,
  input: DescribeTargetHealthCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
