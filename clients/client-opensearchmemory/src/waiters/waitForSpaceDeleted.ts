// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetSpaceCommandInput, type GetSpaceCommandOutput, GetSpaceCommand } from "../commands/GetSpaceCommand";
import type { ResourceNotFoundException } from "../models/errors";
import type { OpenSearchMemoryServiceException } from "../models/OpenSearchMemoryServiceException";
import type { OpenSearchMemoryClient } from "../OpenSearchMemoryClient";

const checkState = async (client: OpenSearchMemoryClient, input: GetSpaceCommandInput): Promise<WaiterResult<GetSpaceCommandOutput | OpenSearchMemoryServiceException>> => {
  let reason;
  try {
    let result: GetSpaceCommandOutput & any = await client.send(new GetSpaceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
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
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until the space is deleted.
 *  @deprecated Use waitUntilSpaceDeleted instead. waitForSpaceDeleted does not throw error in non-success cases.
 */
export const waitForSpaceDeleted = async (
  params: WaiterConfiguration<OpenSearchMemoryClient>,
  input: GetSpaceCommandInput
): Promise<WaiterResult<GetSpaceCommandOutput | OpenSearchMemoryServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until the space is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSpaceCommand for polling.
 */
export const waitUntilSpaceDeleted = async (
  params: WaiterConfiguration<OpenSearchMemoryClient>,
  input: GetSpaceCommandInput
): Promise<WaiterResult<GetSpaceCommandOutput | ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetSpaceCommandOutput | ResourceNotFoundException>;
};
