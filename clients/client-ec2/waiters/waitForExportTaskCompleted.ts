import { EC2Client } from "../EC2Client";
import { DescribeExportTasksCommand, DescribeExportTasksCommandInput } from "../commands/DescribeExportTasksCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EC2Client, input: DescribeExportTasksCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeExportTasksCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ExportTasks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "completed";
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
 *  @param input : the input to DescribeExportTasksCommand for polling.
 */
export const waitForExportTaskCompleted = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeExportTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
