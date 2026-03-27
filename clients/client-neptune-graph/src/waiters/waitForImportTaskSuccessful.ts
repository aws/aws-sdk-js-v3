// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetImportTaskCommandInput, GetImportTaskCommand } from "../commands/GetImportTaskCommand";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetImportTaskCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetImportTaskCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CANCELLING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ROLLING_BACK") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until Import Task is Successful
 *  @deprecated Use waitUntilImportTaskSuccessful instead. waitForImportTaskSuccessful does not throw error in non-success cases.
 */
export const waitForImportTaskSuccessful = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetImportTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Import Task is Successful
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetImportTaskCommand for polling.
 */
export const waitUntilImportTaskSuccessful = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetImportTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
