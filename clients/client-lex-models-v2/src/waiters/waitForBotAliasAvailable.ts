// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeBotAliasCommandInput,
  type DescribeBotAliasCommandOutput,
  DescribeBotAliasCommand,
} from "../commands/DescribeBotAliasCommand";
import type { LexModelsV2Client } from "../LexModelsV2Client";
import type { LexModelsV2ServiceException } from "../models/LexModelsV2ServiceException";

const checkState = async (client: LexModelsV2Client, input: DescribeBotAliasCommandInput): Promise<WaiterResult<DescribeBotAliasCommandOutput | LexModelsV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeBotAliasCommandOutput & any = await client.send(new DescribeBotAliasCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.botAliasStatus;
      }
      if (returnComparator() === "Available") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botAliasStatus;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.botAliasStatus;
      }
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
): Promise<WaiterResult<DescribeBotAliasCommandOutput | LexModelsV2ServiceException>> => {
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
): Promise<WaiterResult<DescribeBotAliasCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeBotAliasCommandOutput>;
};
