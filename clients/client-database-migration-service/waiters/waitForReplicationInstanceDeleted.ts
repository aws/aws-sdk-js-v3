import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
} from "../commands/DescribeReplicationInstancesCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationInstancesCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeReplicationInstancesCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ReplicationInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ReplicationInstanceStatus;
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
    if (exception.name && exception.name == "ResourceNotFoundFault") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until DMS replication instance is deleted.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeReplicationInstancesCommand for polling.
 */
export const waitForReplicationInstanceDeleted = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeReplicationInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
