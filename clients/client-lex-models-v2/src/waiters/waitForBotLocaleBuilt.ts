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
    try {
      const returnComparator = () => {
        return result.botLocaleStatus;
      };
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
 * Wait until a bot locale is built
 *  @deprecated Use waitUntilBotLocaleBuilt instead. waitForBotLocaleBuilt does not throw error in non-success cases.
 */
export const waitForBotLocaleBuilt = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotLocaleCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot locale is built
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBotLocaleCommand for polling.
 */
export const waitUntilBotLocaleBuilt = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotLocaleCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
