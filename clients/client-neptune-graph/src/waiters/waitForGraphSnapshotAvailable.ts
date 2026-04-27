// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetGraphSnapshotCommandInput,
  type GetGraphSnapshotCommandOutput,
  GetGraphSnapshotCommand,
} from "../commands/GetGraphSnapshotCommand";
import type { NeptuneGraphServiceException } from "../models/NeptuneGraphServiceException";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetGraphSnapshotCommandInput): Promise<WaiterResult<GetGraphSnapshotCommandOutput | NeptuneGraphServiceException>> => {
  let reason;
  try {
    let result: GetGraphSnapshotCommandOutput & any = await client.send(new GetGraphSnapshotCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
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
      if (returnComparator() === "AVAILABLE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until GraphSnapshot is Available
 *  @deprecated Use waitUntilGraphSnapshotAvailable instead. waitForGraphSnapshotAvailable does not throw error in non-success cases.
 */
export const waitForGraphSnapshotAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult<GetGraphSnapshotCommandOutput | NeptuneGraphServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 7200 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until GraphSnapshot is Available
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphSnapshotCommand for polling.
 */
export const waitUntilGraphSnapshotAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult<GetGraphSnapshotCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 7200 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetGraphSnapshotCommandOutput>;
};
