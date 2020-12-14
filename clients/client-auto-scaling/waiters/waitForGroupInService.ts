import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
} from "../commands/DescribeAutoScalingGroupsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAutoScalingGroupsCommand(input));
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
        return { state: WaiterState.SUCCESS };
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
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAutoScalingGroupsCommand for polling.
 */
export const waitForGroupInService = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
