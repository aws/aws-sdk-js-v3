// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetVocabularyCommand, GetVocabularyCommandInput } from "../commands/GetVocabularyCommand";
import { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetVocabularyCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetVocabularyCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.VocabularyState;
      }
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.VocabularyState;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilVocabularyReady instead. waitForVocabularyReady does not throw error in non-success cases.
 */
export const waitForVocabularyReady = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetVocabularyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetVocabularyCommand for polling.
 */
export const waitUntilVocabularyReady = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetVocabularyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
