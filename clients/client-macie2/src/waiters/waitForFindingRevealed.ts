// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetSensitiveDataOccurrencesCommand,
  GetSensitiveDataOccurrencesCommandInput,
} from "../commands/GetSensitiveDataOccurrencesCommand";
import { Macie2Client } from "../Macie2Client";

const checkState = async (
  client: Macie2Client,
  input: GetSensitiveDataOccurrencesCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetSensitiveDataOccurrencesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until the sensitive data occurrences are ready.
 *  @deprecated Use waitUntilFindingRevealed instead. waitForFindingRevealed does not throw error in non-success cases.
 */
export const waitForFindingRevealed = async (
  params: WaiterConfiguration<Macie2Client>,
  input: GetSensitiveDataOccurrencesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the sensitive data occurrences are ready.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSensitiveDataOccurrencesCommand for polling.
 */
export const waitUntilFindingRevealed = async (
  params: WaiterConfiguration<Macie2Client>,
  input: GetSensitiveDataOccurrencesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
