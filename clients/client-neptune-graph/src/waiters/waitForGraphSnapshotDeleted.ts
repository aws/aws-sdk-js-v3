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
import type { ResourceNotFoundException } from "../models/errors";
import type { NeptuneGraphServiceException } from "../models/NeptuneGraphServiceException";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetGraphSnapshotCommandInput): Promise<WaiterResult<GetGraphSnapshotCommandOutput | NeptuneGraphServiceException>> => {
  let reason;
  try {
    let result: GetGraphSnapshotCommandOutput & any = await client.send(new GetGraphSnapshotCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return (result.status != "DELETING");
      }
      if (returnComparator() == true) {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until GraphSnapshot is Deleted
 *  @deprecated Use waitUntilGraphSnapshotDeleted instead. waitForGraphSnapshotDeleted does not throw error in non-success cases.
 */
export const waitForGraphSnapshotDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult<GetGraphSnapshotCommandOutput | NeptuneGraphServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until GraphSnapshot is Deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphSnapshotCommand for polling.
 */
export const waitUntilGraphSnapshotDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
