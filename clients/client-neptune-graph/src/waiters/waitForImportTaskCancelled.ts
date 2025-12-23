// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetImportTaskCommand, GetImportTaskCommandInput } from "../commands/GetImportTaskCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetImportTaskCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetImportTaskCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return ((result.status != "CANCELLING") && (result.status != "CANCELLED"));
      }
      if (returnComparator() == true) {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until Import Task is Cancelled
 *  @deprecated Use waitUntilImportTaskCancelled instead. waitForImportTaskCancelled does not throw error in non-success cases.
 */
export const waitForImportTaskCancelled = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetImportTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Import Task is Cancelled
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetImportTaskCommand for polling.
 */
export const waitUntilImportTaskCancelled = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetImportTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
