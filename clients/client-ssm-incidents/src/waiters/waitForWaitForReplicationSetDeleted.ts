// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetReplicationSetCommandInput,
  type GetReplicationSetCommandOutput,
  GetReplicationSetCommand,
} from "../commands/GetReplicationSetCommand";
import type { ResourceNotFoundException } from "../models/errors";
import type { SSMIncidentsServiceException } from "../models/SSMIncidentsServiceException";
import type { SSMIncidentsClient } from "../SSMIncidentsClient";

const checkState = async (client: SSMIncidentsClient, input: GetReplicationSetCommandInput): Promise<WaiterResult<GetReplicationSetCommandOutput | SSMIncidentsServiceException>> => {
  let reason;
  try {
    let result: GetReplicationSetCommandOutput & any = await client.send(new GetReplicationSetCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.replicationSet.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.replicationSet.status;
      }
      if (returnComparator() === "FAILED") {
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
 * Wait for a replication set to be deleted
 *  @deprecated Use waitUntilWaitForReplicationSetDeleted instead. waitForWaitForReplicationSetDeleted does not throw error in non-success cases.
 */
export const waitForWaitForReplicationSetDeleted = async (
  params: WaiterConfiguration<SSMIncidentsClient>,
  input: GetReplicationSetCommandInput
): Promise<WaiterResult<GetReplicationSetCommandOutput | SSMIncidentsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 30 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait for a replication set to be deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetReplicationSetCommand for polling.
 */
export const waitUntilWaitForReplicationSetDeleted = async (
  params: WaiterConfiguration<SSMIncidentsClient>,
  input: GetReplicationSetCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 30 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
