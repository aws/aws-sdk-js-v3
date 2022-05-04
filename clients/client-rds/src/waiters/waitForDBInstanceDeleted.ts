// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeDBInstancesCommand, DescribeDBInstancesCommandInput } from "../commands/DescribeDBInstancesCommand";
import { RDSClient } from "../RDSClient";

const checkState = async (client: RDSClient, input: DescribeDBInstancesCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeDBInstancesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.DBInstances.length == 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.DBInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "creating") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.DBInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "modifying") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.DBInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "rebooting") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.DBInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "resetting-master-credentials") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "DBInstanceNotFound") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilDBInstanceDeleted instead. waitForDBInstanceDeleted does not throw error in non-success cases.
 */
export const waitForDBInstanceDeleted = async (
  params: WaiterConfiguration<RDSClient>,
  input: DescribeDBInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDBInstancesCommand for polling.
 */
export const waitUntilDBInstanceDeleted = async (
  params: WaiterConfiguration<RDSClient>,
  input: DescribeDBInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
