import { MachineLearningClient } from "../MachineLearningClient";
import { DescribeDataSourcesCommand, DescribeDataSourcesCommandInput } from "../commands/DescribeDataSourcesCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: MachineLearningClient,
  input: DescribeDataSourcesCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeDataSourcesCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Results);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "COMPLETED";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Results);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "FAILED") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeDataSourcesCommand for polling.
 */
export const waitForDataSourceAvailable = async (
  params: WaiterConfiguration<MachineLearningClient>,
  input: DescribeDataSourcesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
