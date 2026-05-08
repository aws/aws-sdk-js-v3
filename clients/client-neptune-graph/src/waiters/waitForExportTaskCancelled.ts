// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetExportTaskCommandInput,
  type GetExportTaskCommandOutput,
  GetExportTaskCommand,
} from "../commands/GetExportTaskCommand";
import type { NeptuneGraphServiceException } from "../models/NeptuneGraphServiceException";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetExportTaskCommandInput): Promise<WaiterResult<GetExportTaskCommandOutput | NeptuneGraphServiceException>> => {
  let reason;
  try {
    let result: GetExportTaskCommandOutput & any = await client.send(new GetExportTaskCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return ((result.status != "CANCELLING") && (result.status != "CANCELLED"));
      }
      if (returnComparator() == true) {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
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
 * Wait until Export Task is Cancelled
 *  @deprecated Use waitUntilExportTaskCancelled instead. waitForExportTaskCancelled does not throw error in non-success cases.
 */
export const waitForExportTaskCancelled = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetExportTaskCommandInput
): Promise<WaiterResult<GetExportTaskCommandOutput | NeptuneGraphServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Export Task is Cancelled
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetExportTaskCommand for polling.
 */
export const waitUntilExportTaskCancelled = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetExportTaskCommandInput
): Promise<WaiterResult<GetExportTaskCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetExportTaskCommandOutput>;
};
