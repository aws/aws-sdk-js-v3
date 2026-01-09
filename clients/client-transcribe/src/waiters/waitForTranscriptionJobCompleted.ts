// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetTranscriptionJobCommand, GetTranscriptionJobCommandInput } from "../commands/GetTranscriptionJobCommand";
import { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetTranscriptionJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetTranscriptionJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.TranscriptionJob.TranscriptionJobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TranscriptionJob.TranscriptionJobStatus;
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
 *  @deprecated Use waitUntilTranscriptionJobCompleted instead. waitForTranscriptionJobCompleted does not throw error in non-success cases.
 */
export const waitForTranscriptionJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetTranscriptionJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetTranscriptionJobCommand for polling.
 */
export const waitUntilTranscriptionJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetTranscriptionJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
