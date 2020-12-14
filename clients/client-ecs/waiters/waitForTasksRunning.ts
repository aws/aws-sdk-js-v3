import { ECSClient } from "../ECSClient";
import { DescribeTasksCommand, DescribeTasksCommandInput } from "../commands/DescribeTasksCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECSClient, input: DescribeTasksCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeTasksCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.tasks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.lastStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "STOPPED") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.failures);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.reason;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "MISSING") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.tasks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.lastStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "RUNNING";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeTasksCommand for polling.
 */
export const waitForTasksRunning = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 6, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
