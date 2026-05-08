// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetVocabularyCommandInput,
  type GetVocabularyCommandOutput,
  GetVocabularyCommand,
} from "../commands/GetVocabularyCommand";
import type { TranscribeServiceException } from "../models/TranscribeServiceException";
import type { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetVocabularyCommandInput): Promise<WaiterResult<GetVocabularyCommandOutput | TranscribeServiceException>> => {
  let reason;
  try {
    let result: GetVocabularyCommandOutput & any = await client.send(new GetVocabularyCommand(input));
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
): Promise<WaiterResult<GetVocabularyCommandOutput | TranscribeServiceException>> => {
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
): Promise<WaiterResult<GetVocabularyCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetVocabularyCommandOutput>;
};
