// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetMedicalScribeJobCommandInput,
  GetMedicalScribeJobCommand,
} from "../commands/GetMedicalScribeJobCommand";
import type { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetMedicalScribeJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetMedicalScribeJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.MedicalScribeJob.MedicalScribeJobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.MedicalScribeJob.MedicalScribeJobStatus;
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
 *  @deprecated Use waitUntilMedicalScribeJobCompleted instead. waitForMedicalScribeJobCompleted does not throw error in non-success cases.
 */
export const waitForMedicalScribeJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetMedicalScribeJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetMedicalScribeJobCommand for polling.
 */
export const waitUntilMedicalScribeJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetMedicalScribeJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
