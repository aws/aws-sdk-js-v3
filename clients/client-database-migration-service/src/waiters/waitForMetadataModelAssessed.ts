// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeMetadataModelAssessmentsCommandInput,
  type DescribeMetadataModelAssessmentsCommandOutput,
  DescribeMetadataModelAssessmentsCommand,
} from "../commands/DescribeMetadataModelAssessmentsCommand";
import type { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import type { DatabaseMigrationServiceServiceException } from "../models/DatabaseMigrationServiceServiceException";

const checkState = async (client: DatabaseMigrationServiceClient, input: DescribeMetadataModelAssessmentsCommandInput): Promise<WaiterResult<DescribeMetadataModelAssessmentsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  let reason;
  try {
    let result: DescribeMetadataModelAssessmentsCommandOutput & any = await client.send(new DescribeMetadataModelAssessmentsCommand(input));
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
 * Wait until DMS metadata model is assessed.
 *  @deprecated Use waitUntilMetadataModelAssessed instead. waitForMetadataModelAssessed does not throw error in non-success cases.
 */
export const waitForMetadataModelAssessed = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelAssessmentsCommandInput
): Promise<WaiterResult<DescribeMetadataModelAssessmentsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until DMS metadata model is assessed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMetadataModelAssessmentsCommand for polling.
 */
export const waitUntilMetadataModelAssessed = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelAssessmentsCommandInput
): Promise<WaiterResult<DescribeMetadataModelAssessmentsCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeMetadataModelAssessmentsCommandOutput>;
};
