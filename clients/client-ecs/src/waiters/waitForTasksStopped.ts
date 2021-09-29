import { ECSClient } from "../ECSClient";
import { DescribeTasksCommand, DescribeTasksCommandInput } from "../commands/DescribeTasksCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECSClient, input: DescribeTasksCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeTasksCommand(input));
    reason = result;
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
        allStringEq_5 = allStringEq_5 && element_4 == "STOPPED";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilTasksStopped instead. waitForTasksStopped does not throw error in non-success cases.
 */
export const waitForTasksStopped = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 6, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTasksCommand for polling.
 */
export const waitUntilTasksStopped = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 6, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
