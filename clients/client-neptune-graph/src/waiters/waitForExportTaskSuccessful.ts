// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetExportTaskCommand, GetExportTaskCommandInput } from "../commands/GetExportTaskCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetExportTaskCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetExportTaskCommand(input));
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
 * Wait until Export Task is Successful
 *  @deprecated Use waitUntilExportTaskSuccessful instead. waitForExportTaskSuccessful does not throw error in non-success cases.
 */
export const waitForExportTaskSuccessful = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetExportTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Export Task is Successful
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetExportTaskCommand for polling.
 */
export const waitUntilExportTaskSuccessful = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetExportTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
