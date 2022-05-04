// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeBotLocaleCommand, DescribeBotLocaleCommandInput } from "../commands/DescribeBotLocaleCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";

const checkState = async (client: LexModelsV2Client, input: DescribeBotLocaleCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeBotLocaleCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      };
      if (returnComparator() === "Built") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      };
      if (returnComparator() === "ReadyExpressTesting") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      };
      if (returnComparator() === "NotBuilt") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      };
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
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
 * Wait unit a bot locale is created
 *  @deprecated Use waitUntilBotLocaleCreated instead. waitForBotLocaleCreated does not throw error in non-success cases.
 */
export const waitForBotLocaleCreated = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotLocaleCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait unit a bot locale is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBotLocaleCommand for polling.
 */
export const waitUntilBotLocaleCreated = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotLocaleCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
