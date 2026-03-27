// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetStreamGroupCommandInput, GetStreamGroupCommand } from "../commands/GetStreamGroupCommand";
import type { GameLiftStreamsClient } from "../GameLiftStreamsClient";

const checkState = async (client: GameLiftStreamsClient, input: GetStreamGroupCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetStreamGroupCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until a stream group is deleted
 *  @deprecated Use waitUntilStreamGroupDeleted instead. waitForStreamGroupDeleted does not throw error in non-success cases.
 */
export const waitForStreamGroupDeleted = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetStreamGroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until a stream group is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamGroupCommand for polling.
 */
export const waitUntilStreamGroupDeleted = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetStreamGroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
