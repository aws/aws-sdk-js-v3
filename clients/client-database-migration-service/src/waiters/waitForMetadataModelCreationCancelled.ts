// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeMetadataModelCreationsCommandInput,
  type DescribeMetadataModelCreationsCommandOutput,
  DescribeMetadataModelCreationsCommand,
} from "../commands/DescribeMetadataModelCreationsCommand";
import type { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import type { DatabaseMigrationServiceServiceException } from "../models/DatabaseMigrationServiceServiceException";

const checkState = async (client: DatabaseMigrationServiceClient, input: DescribeMetadataModelCreationsCommandInput): Promise<WaiterResult<DescribeMetadataModelCreationsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  let reason;
  try {
    let result: DescribeMetadataModelCreationsCommandOutput & any = await client.send(new DescribeMetadataModelCreationsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Requests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "CANCELED")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Requests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "FAILED") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until DMS metadata model creation is cancelled.
 *  @deprecated Use waitUntilMetadataModelCreationCancelled instead. waitForMetadataModelCreationCancelled does not throw error in non-success cases.
 */
export const waitForMetadataModelCreationCancelled = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelCreationsCommandInput
): Promise<WaiterResult<DescribeMetadataModelCreationsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until DMS metadata model creation is cancelled.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMetadataModelCreationsCommand for polling.
 */
export const waitUntilMetadataModelCreationCancelled = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelCreationsCommandInput
): Promise<WaiterResult<DescribeMetadataModelCreationsCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeMetadataModelCreationsCommandOutput>;
};
