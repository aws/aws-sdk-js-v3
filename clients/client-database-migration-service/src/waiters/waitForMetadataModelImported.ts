// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeMetadataModelImportsCommandInput,
  type DescribeMetadataModelImportsCommandOutput,
  DescribeMetadataModelImportsCommand,
} from "../commands/DescribeMetadataModelImportsCommand";
import type { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import type { DatabaseMigrationServiceServiceException } from "../models/DatabaseMigrationServiceServiceException";

const checkState = async (client: DatabaseMigrationServiceClient, input: DescribeMetadataModelImportsCommandInput): Promise<WaiterResult<DescribeMetadataModelImportsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  let reason;
  try {
    let result: DescribeMetadataModelImportsCommandOutput & any = await client.send(new DescribeMetadataModelImportsCommand(input));
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
        allStringEq_5 = allStringEq_5 && (element_4 == "SUCCESS")
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
 * Wait until DMS metadata model is imported.
 *  @deprecated Use waitUntilMetadataModelImported instead. waitForMetadataModelImported does not throw error in non-success cases.
 */
export const waitForMetadataModelImported = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelImportsCommandInput
): Promise<WaiterResult<DescribeMetadataModelImportsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until DMS metadata model is imported.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMetadataModelImportsCommand for polling.
 */
export const waitUntilMetadataModelImported = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelImportsCommandInput
): Promise<WaiterResult<DescribeMetadataModelImportsCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeMetadataModelImportsCommandOutput>;
};
