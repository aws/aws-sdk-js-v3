// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeImportCommand, DescribeImportCommandInput } from "../commands/DescribeImportCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";

const checkState = async (client: LexModelsV2Client, input: DescribeImportCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeImportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.importStatus;
      };
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.importStatus;
      };
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.importStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a bot has been imported
 *  @deprecated Use waitUntilBotImportCompleted instead. waitForBotImportCompleted does not throw error in non-success cases.
 */
export const waitForBotImportCompleted = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeImportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot has been imported
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImportCommand for polling.
 */
export const waitUntilBotImportCompleted = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeImportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
