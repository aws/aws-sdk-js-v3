// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
} from "../commands/DescribeReplicationInstancesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";

const checkState = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationInstancesCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeReplicationInstancesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.ReplicationInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.ReplicationInstanceStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "available") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundFault") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until DMS replication instance is deleted.
 *  @deprecated Use waitUntilReplicationInstanceDeleted instead. waitForReplicationInstanceDeleted does not throw error in non-success cases.
 */
export const waitForReplicationInstanceDeleted = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeReplicationInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until DMS replication instance is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationInstancesCommand for polling.
 */
export const waitUntilReplicationInstanceDeleted = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeReplicationInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
