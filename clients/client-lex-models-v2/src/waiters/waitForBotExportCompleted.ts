import { LexModelsV2Client } from "../LexModelsV2Client";
import { DescribeExportCommand, DescribeExportCommandInput } from "../commands/DescribeExportCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: LexModelsV2Client, input: DescribeExportCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeExportCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.exportStatus;
      };
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.exportStatus;
      };
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.exportStatus;
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
 * Wait until a bot has been exported
 *  @deprecated Use waitUntilBotExportCompleted instead. waitForBotExportCompleted does not throw error in non-success cases.
 */
export const waitForBotExportCompleted = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeExportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a bot has been exported
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeExportCommand for polling.
 */
export const waitUntilBotExportCompleted = async (
  params: WaiterConfiguration<LexModelsV2Client>,
  input: DescribeExportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
