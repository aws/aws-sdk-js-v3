// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeMetadataModelConversionsCommandInput,
  type DescribeMetadataModelConversionsCommandOutput,
  DescribeMetadataModelConversionsCommand,
} from "../commands/DescribeMetadataModelConversionsCommand";
import type { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import type { DatabaseMigrationServiceServiceException } from "../models/DatabaseMigrationServiceServiceException";

const checkState = async (client: DatabaseMigrationServiceClient, input: DescribeMetadataModelConversionsCommandInput): Promise<WaiterResult<DescribeMetadataModelConversionsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  let reason;
  try {
    let result: DescribeMetadataModelConversionsCommandOutput & any = await client.send(new DescribeMetadataModelConversionsCommand(input));
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
 * Wait until DMS metadata model conversion is cancelled.
 *  @deprecated Use waitUntilMetadataModelConversionCancelled instead. waitForMetadataModelConversionCancelled does not throw error in non-success cases.
 */
export const waitForMetadataModelConversionCancelled = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelConversionsCommandInput
): Promise<WaiterResult<DescribeMetadataModelConversionsCommandOutput | DatabaseMigrationServiceServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until DMS metadata model conversion is cancelled.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMetadataModelConversionsCommand for polling.
 */
export const waitUntilMetadataModelConversionCancelled = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeMetadataModelConversionsCommandInput
): Promise<WaiterResult<DescribeMetadataModelConversionsCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeMetadataModelConversionsCommandOutput>;
};
