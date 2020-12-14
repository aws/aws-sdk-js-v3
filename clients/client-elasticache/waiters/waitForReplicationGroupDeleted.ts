import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeReplicationGroupsCommand,
  DescribeReplicationGroupsCommandInput,
} from "../commands/DescribeReplicationGroupsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ElastiCacheClient,
  input: DescribeReplicationGroupsCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeReplicationGroupsCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ReplicationGroups);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "deleted";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ReplicationGroups);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "available") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "ReplicationGroupNotFoundFault") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until ElastiCache replication group is deleted.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeReplicationGroupsCommand for polling.
 */
export const waitForReplicationGroupDeleted = async (
  params: WaiterConfiguration<ElastiCacheClient>,
  input: DescribeReplicationGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
