import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
} from "../commands/DescribeAutoScalingGroupsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeAutoScalingGroupsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.AutoScalingGroups);
        let projection_3 = flat_1.map((element_2: any) => {
          let filterRes_5 = element_2.Instances.filter((element_4: any) => {
            return element_4.LifecycleState == "InService";
          });
          let result_6 = [];
          result_6.push(filterRes_5.length >= element_2.MinSize);
          element_2 = result_6;
          return element_2;
        });
        let flat_7: any[] = [].concat(...projection_3);
        return flat_7.includes(false);
      };
      if (returnComparator() == false) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.AutoScalingGroups);
        let projection_3 = flat_1.map((element_2: any) => {
          let filterRes_5 = element_2.Instances.filter((element_4: any) => {
            return element_4.LifecycleState == "InService";
          });
          let result_6 = [];
          result_6.push(filterRes_5.length >= element_2.MinSize);
          element_2 = result_6;
          return element_2;
        });
        let flat_7: any[] = [].concat(...projection_3);
        return flat_7.includes(false);
      };
      if (returnComparator() == true) {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilGroupInService instead. waitForGroupInService does not throw error in non-success cases.
 */
export const waitForGroupInService = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export const waitUntilGroupInService = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
