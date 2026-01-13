// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetMedicalVocabularyCommand, GetMedicalVocabularyCommandInput } from "../commands/GetMedicalVocabularyCommand";
import { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetMedicalVocabularyCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetMedicalVocabularyCommand(input));
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
 *  @deprecated Use waitUntilMedicalVocabularyReady instead. waitForMedicalVocabularyReady does not throw error in non-success cases.
 */
export const waitForMedicalVocabularyReady = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetMedicalVocabularyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetMedicalVocabularyCommand for polling.
 */
export const waitUntilMedicalVocabularyReady = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetMedicalVocabularyCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
