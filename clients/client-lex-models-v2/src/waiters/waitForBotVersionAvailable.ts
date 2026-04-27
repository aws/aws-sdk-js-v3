// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeBotVersionCommandInput,
  type DescribeBotVersionCommandOutput,
  DescribeBotVersionCommand,
} from "../commands/DescribeBotVersionCommand";
import type { LexModelsV2Client } from "../LexModelsV2Client";
import type { LexModelsV2ServiceException } from "../models/LexModelsV2ServiceException";

const checkState = async (client: LexModelsV2Client, input: DescribeBotVersionCommandInput): Promise<WaiterResult<DescribeBotVersionCommandOutput | LexModelsV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeBotVersionCommandOutput & any = await client.send(new DescribeBotVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.botStatus;
      }
      if (returnComparator() === "Available") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botStatus;
      }
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botStatus;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a bot version is available
 *  @deprecated Use waitUntilBotVersionAvailable instead. waitForBotVersionAvailable does not throw error in non-success cases.
 */
export const waitForBotVersionAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotVersionCommandInput
): Promise<WaiterResult<DescribeBotVersionCommandOutput | LexModelsV2ServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot version is available
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBotVersionCommand for polling.
 */
export const waitUntilBotVersionAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotVersionCommandInput
): Promise<WaiterResult<DescribeBotVersionCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeBotVersionCommandOutput>;
};
