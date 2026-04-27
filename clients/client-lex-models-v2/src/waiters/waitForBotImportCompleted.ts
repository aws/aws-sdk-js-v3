// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeImportCommandInput,
  type DescribeImportCommandOutput,
  DescribeImportCommand,
} from "../commands/DescribeImportCommand";
import type { LexModelsV2Client } from "../LexModelsV2Client";
import type { LexModelsV2ServiceException } from "../models/LexModelsV2ServiceException";

const checkState = async (client: LexModelsV2Client, input: DescribeImportCommandInput): Promise<WaiterResult<DescribeImportCommandOutput | LexModelsV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeImportCommandOutput & any = await client.send(new DescribeImportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.importStatus;
      }
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.importStatus;
      }
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.importStatus;
      }
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
): Promise<WaiterResult<DescribeImportCommandOutput | LexModelsV2ServiceException>> => {
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
): Promise<WaiterResult<DescribeImportCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeImportCommandOutput>;
};
