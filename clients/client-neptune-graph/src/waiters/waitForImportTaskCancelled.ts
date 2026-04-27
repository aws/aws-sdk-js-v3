// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetImportTaskCommandInput,
  type GetImportTaskCommandOutput,
  GetImportTaskCommand,
} from "../commands/GetImportTaskCommand";
import type { NeptuneGraphServiceException } from "../models/NeptuneGraphServiceException";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetImportTaskCommandInput): Promise<WaiterResult<GetImportTaskCommandOutput | NeptuneGraphServiceException>> => {
  let reason;
  try {
    let result: GetImportTaskCommandOutput & any = await client.send(new GetImportTaskCommand(input));
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
 * Wait until Import Task is Cancelled
 *  @deprecated Use waitUntilImportTaskCancelled instead. waitForImportTaskCancelled does not throw error in non-success cases.
 */
export const waitForImportTaskCancelled = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetImportTaskCommandInput
): Promise<WaiterResult<GetImportTaskCommandOutput | NeptuneGraphServiceException>> => {
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
): Promise<WaiterResult<GetImportTaskCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetImportTaskCommandOutput>;
};
