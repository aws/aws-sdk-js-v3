import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsCommandInput,
} from "../commands/DescribeClusterSnapshotsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: RedshiftClient,
  input: DescribeClusterSnapshotsCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeClusterSnapshotsCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Snapshots);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Snapshots);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "failed") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Snapshots);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleted") {
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
 *  @param input : the input to DescribeClusterSnapshotsCommand for polling.
 */
export const waitForSnapshotAvailable = async (
  params: WaiterConfiguration<RedshiftClient>,
  input: DescribeClusterSnapshotsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
