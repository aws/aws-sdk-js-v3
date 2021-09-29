import { LexModelsV2Client } from "../LexModelsV2Client";
import { DescribeBotCommand, DescribeBotCommandInput } from "../commands/DescribeBotCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: LexModelsV2Client, input: DescribeBotCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeBotCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Available") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.botStatus;
      };
      if (returnComparator() === "Inactive") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a bot is available
 *  @deprecated Use waitUntilBotAvailable instead. waitForBotAvailable does not throw error in non-success cases.
 */
export const waitForBotAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot is available
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBotCommand for polling.
 */
export const waitUntilBotAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
