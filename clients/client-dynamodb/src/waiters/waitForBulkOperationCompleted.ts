// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeBulkOperationCommandInput,
  type DescribeBulkOperationCommandOutput,
  DescribeBulkOperationCommand,
} from "../commands/DescribeBulkOperationCommand";
import type { DynamoDBClient } from "../DynamoDBClient";
import type { DynamoDBServiceException } from "../models/DynamoDBServiceException";

const checkState = async (client: DynamoDBClient, input: DescribeBulkOperationCommandInput): Promise<WaiterResult<DescribeBulkOperationCommandOutput | DynamoDBServiceException>> => {
  let reason;
  try {
    let result: DescribeBulkOperationCommandOutput & any = await client.send(new DescribeBulkOperationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.BulkOperationDescription.BulkOperationStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.BulkOperationDescription.BulkOperationStatus;
      }
      if (returnComparator() === "COMPLETED_WITH_ERRORS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.BulkOperationDescription.BulkOperationStatus;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.BulkOperationDescription.BulkOperationStatus;
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
 * Wait until a bulk operation is completed.
 *  @deprecated Use waitUntilBulkOperationCompleted instead. waitForBulkOperationCompleted does not throw error in non-success cases.
 */
export const waitForBulkOperationCompleted = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeBulkOperationCommandInput
): Promise<WaiterResult<DescribeBulkOperationCommandOutput | DynamoDBServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bulk operation is completed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBulkOperationCommand for polling.
 */
export const waitUntilBulkOperationCompleted = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeBulkOperationCommandInput
): Promise<WaiterResult<DescribeBulkOperationCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeBulkOperationCommandOutput>;
};
