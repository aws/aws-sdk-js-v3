import { LexModelsV2Client } from "../LexModelsV2Client";
import { DescribeBotAliasCommand, DescribeBotAliasCommandInput } from "../commands/DescribeBotAliasCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: LexModelsV2Client, input: DescribeBotAliasCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeBotAliasCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.botAliasStatus;
      };
      if (returnComparator() === "Available") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.botAliasStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.botAliasStatus;
      };
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a bot alias is available
 *  @deprecated Use waitUntilBotAliasAvailable instead. waitForBotAliasAvailable does not throw error in non-success cases.
 */
export const waitForBotAliasAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotAliasCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot alias is available
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBotAliasCommand for polling.
 */
export const waitUntilBotAliasAvailable = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeBotAliasCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
