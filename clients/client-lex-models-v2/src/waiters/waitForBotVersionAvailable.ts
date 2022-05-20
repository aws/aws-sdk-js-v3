// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeBotVersionCommand, DescribeBotVersionCommandInput } from "../commands/DescribeBotVersionCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";

const checkState = async (client: LexModelsV2Client, input: DescribeBotVersionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeBotVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Available") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
