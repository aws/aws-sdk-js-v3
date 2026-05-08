// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetStreamGroupCommandInput,
  type GetStreamGroupCommandOutput,
  GetStreamGroupCommand,
} from "../commands/GetStreamGroupCommand";
import type { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import type { GameLiftStreamsServiceException } from "../models/GameLiftStreamsServiceException";

const checkState = async (client: GameLiftStreamsClient, input: GetStreamGroupCommandInput): Promise<WaiterResult<GetStreamGroupCommandOutput | GameLiftStreamsServiceException>> => {
  let reason;
  try {
    let result: GetStreamGroupCommandOutput & any = await client.send(new GetStreamGroupCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "ACTIVE_WITH_ERRORS") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until a stream group is active
 *  @deprecated Use waitUntilStreamGroupActive instead. waitForStreamGroupActive does not throw error in non-success cases.
 */
export const waitForStreamGroupActive = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetStreamGroupCommandInput
): Promise<WaiterResult<GetStreamGroupCommandOutput | GameLiftStreamsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until a stream group is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamGroupCommand for polling.
 */
export const waitUntilStreamGroupActive = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetStreamGroupCommandInput
): Promise<WaiterResult<GetStreamGroupCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetStreamGroupCommandOutput>;
};
