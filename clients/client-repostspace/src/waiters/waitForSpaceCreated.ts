// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetSpaceCommandInput, type GetSpaceCommandOutput, GetSpaceCommand } from "../commands/GetSpaceCommand";
import type { RepostspaceServiceException } from "../models/RepostspaceServiceException";
import type { RepostspaceClient } from "../RepostspaceClient";

const checkState = async (client: RepostspaceClient, input: GetSpaceCommandInput): Promise<WaiterResult<GetSpaceCommandOutput | RepostspaceServiceException>> => {
  let reason;
  try {
    let result: GetSpaceCommandOutput & any = await client.send(new GetSpaceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSpaceCreated instead. waitForSpaceCreated does not throw error in non-success cases.
 */
export const waitForSpaceCreated = async (
  params: WaiterConfiguration<RepostspaceClient>,
  input: GetSpaceCommandInput
): Promise<WaiterResult<GetSpaceCommandOutput | RepostspaceServiceException>> => {
  const serviceDefaults = { minDelay: 300, maxDelay: 7200 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSpaceCommand for polling.
 */
export const waitUntilSpaceCreated = async (
  params: WaiterConfiguration<RepostspaceClient>,
  input: GetSpaceCommandInput
): Promise<WaiterResult<GetSpaceCommandOutput>> => {
  const serviceDefaults = { minDelay: 300, maxDelay: 7200 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetSpaceCommandOutput>;
};
