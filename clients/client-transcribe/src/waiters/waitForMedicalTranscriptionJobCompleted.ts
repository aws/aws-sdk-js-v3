// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetMedicalTranscriptionJobCommandInput,
  type GetMedicalTranscriptionJobCommandOutput,
  GetMedicalTranscriptionJobCommand,
} from "../commands/GetMedicalTranscriptionJobCommand";
import type { TranscribeServiceException } from "../models/TranscribeServiceException";
import type { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetMedicalTranscriptionJobCommandInput): Promise<WaiterResult<GetMedicalTranscriptionJobCommandOutput | TranscribeServiceException>> => {
  let reason;
  try {
    let result: GetMedicalTranscriptionJobCommandOutput & any = await client.send(new GetMedicalTranscriptionJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.MedicalTranscriptionJob.TranscriptionJobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.MedicalTranscriptionJob.TranscriptionJobStatus;
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
 *  @deprecated Use waitUntilMedicalTranscriptionJobCompleted instead. waitForMedicalTranscriptionJobCompleted does not throw error in non-success cases.
 */
export const waitForMedicalTranscriptionJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetMedicalTranscriptionJobCommandInput
): Promise<WaiterResult<GetMedicalTranscriptionJobCommandOutput | TranscribeServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetMedicalTranscriptionJobCommand for polling.
 */
export const waitUntilMedicalTranscriptionJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetMedicalTranscriptionJobCommandInput
): Promise<WaiterResult<GetMedicalTranscriptionJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetMedicalTranscriptionJobCommandOutput>;
};
