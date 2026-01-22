// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { DescribeExportCommand, DescribeExportCommandInput } from "../commands/DescribeExportCommand";
import { DynamoDBClient } from "../DynamoDBClient";

const checkState = async (client: DynamoDBClient, input: DescribeExportCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeExportCommand(input));
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
