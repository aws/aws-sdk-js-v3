// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeExportCommandInput,
  type DescribeExportCommandOutput,
  DescribeExportCommand,
} from "../commands/DescribeExportCommand";
import type { DynamoDBClient } from "../DynamoDBClient";
import type { DynamoDBServiceException } from "../models/DynamoDBServiceException";

const checkState = async (client: DynamoDBClient, input: DescribeExportCommandInput): Promise<WaiterResult<DescribeExportCommandOutput | DynamoDBServiceException>> => {
  let reason;
  try {
    let result: DescribeExportCommandOutput & any = await client.send(new DescribeExportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ExportDescription.ExportStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportDescription.ExportStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilExportCompleted instead. waitForExportCompleted does not throw error in non-success cases.
 */
export const waitForExportCompleted = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeExportCommandInput
): Promise<WaiterResult<DescribeExportCommandOutput | DynamoDBServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeExportCommand for polling.
 */
export const waitUntilExportCompleted = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeExportCommandInput
): Promise<WaiterResult<DescribeExportCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeExportCommandOutput>;
};
