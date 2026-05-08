// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeDBInstancesCommandInput,
  type DescribeDBInstancesCommandOutput,
  DescribeDBInstancesCommand,
} from "../commands/DescribeDBInstancesCommand";
import type { DBInstanceNotFoundFault } from "../models/errors";
import type { RDSServiceException } from "../models/RDSServiceException";
import type { RDSClient } from "../RDSClient";

const checkState = async (client: RDSClient, input: DescribeDBInstancesCommandInput): Promise<WaiterResult<DescribeDBInstancesCommandOutput | RDSServiceException>> => {
  let reason;
  try {
    let result: DescribeDBInstancesCommandOutput & any = await client.send(new DescribeDBInstancesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return (result.DBInstances.length == 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "creating") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "modifying") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "rebooting") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "resetting-master-credentials") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "DBInstanceNotFoundFault") {
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
): Promise<WaiterResult<DescribeDBInstancesCommandOutput | RDSServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
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
): Promise<WaiterResult<DescribeDBInstancesCommandOutput | DBInstanceNotFoundFault>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeDBInstancesCommandOutput | DBInstanceNotFoundFault>;
};
