// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeBotLocaleCommandInput,
  type DescribeBotLocaleCommandOutput,
  DescribeBotLocaleCommand,
} from "../commands/DescribeBotLocaleCommand";
import type { LexModelsV2Client } from "../LexModelsV2Client";
import type { LexModelsV2ServiceException } from "../models/LexModelsV2ServiceException";

const checkState = async (client: LexModelsV2Client, input: DescribeBotLocaleCommandInput): Promise<WaiterResult<DescribeBotLocaleCommandOutput | LexModelsV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeBotLocaleCommandOutput & any = await client.send(new DescribeBotLocaleCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      }
      if (returnComparator() === "Built") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      }
      if (returnComparator() === "ReadyExpressTesting") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      }
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      }
      if (returnComparator() === "NotBuilt") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a bot locale build is ready for express testing
 *  @deprecated Use waitUntilBotLocaleExpressTestingAvailable instead. waitForBotLocaleExpressTestingAvailable does not throw error in non-success cases.
 */
export const waitForBotLocaleExpressTestingAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotLocaleCommandInput
): Promise<WaiterResult<DescribeBotLocaleCommandOutput | LexModelsV2ServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot locale build is ready for express testing
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBotLocaleCommand for polling.
 */
export const waitUntilBotLocaleExpressTestingAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotLocaleCommandInput
): Promise<WaiterResult<DescribeBotLocaleCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeBotLocaleCommandOutput>;
};
