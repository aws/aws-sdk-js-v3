// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "../commands/GetApplicationCommand";
import type { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import type { ResourceNotFoundException } from "../models/errors";
import type { GameLiftStreamsServiceException } from "../models/GameLiftStreamsServiceException";

const checkState = async (client: GameLiftStreamsClient, input: GetApplicationCommandInput): Promise<WaiterResult<GetApplicationCommandOutput | GameLiftStreamsServiceException>> => {
  let reason;
  try {
    let result: GetApplicationCommandOutput & any = await client.send(new GetApplicationCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until an application is deleted
 *  @deprecated Use waitUntilApplicationDeleted instead. waitForApplicationDeleted does not throw error in non-success cases.
 */
export const waitForApplicationDeleted = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult<GetApplicationCommandOutput | GameLiftStreamsServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until an application is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetApplicationCommand for polling.
 */
export const waitUntilApplicationDeleted = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
