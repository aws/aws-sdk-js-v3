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
        let flat_1: any[] = [].concat(...result.ReplicationInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ReplicationInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleting") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ReplicationInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ReplicationInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-credentials") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ReplicationInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ReplicationInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-network") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ReplicationInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ReplicationInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "inaccessible-encryption-credentials") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until DMS replication instance is available.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeReplicationInstancesCommand for polling.
 */
export const waitForReplicationInstanceAvailable = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeReplicationInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
