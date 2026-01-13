// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetCallAnalyticsJobCommand, GetCallAnalyticsJobCommandInput } from "../commands/GetCallAnalyticsJobCommand";
import { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: GetCallAnalyticsJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetCallAnalyticsJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.CallAnalyticsJob.CallAnalyticsJobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.CallAnalyticsJob.CallAnalyticsJobStatus;
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
 *  @deprecated Use waitUntilCallAnalyticsJobCompleted instead. waitForCallAnalyticsJobCompleted does not throw error in non-success cases.
 */
export const waitForCallAnalyticsJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetCallAnalyticsJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCallAnalyticsJobCommand for polling.
 */
export const waitUntilCallAnalyticsJobCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: GetCallAnalyticsJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
