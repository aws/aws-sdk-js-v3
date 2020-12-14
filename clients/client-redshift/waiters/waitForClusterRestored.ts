import { RedshiftClient } from "../RedshiftClient";
import { DescribeClustersCommand, DescribeClustersCommandInput } from "../commands/DescribeClustersCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: RedshiftClient, input: DescribeClustersCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeClustersCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Clusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.RestoreStatus.Status;
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
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Clusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ClusterStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleting") {
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
 *  @param input : the input to DescribeClustersCommand for polling.
 */
export const waitForClusterRestored = async (
  params: WaiterConfiguration<RedshiftClient>,
  input: DescribeClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
