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
import type { GameLiftStreamsServiceException } from "../models/GameLiftStreamsServiceException";

const checkState = async (client: GameLiftStreamsClient, input: GetApplicationCommandInput): Promise<WaiterResult<GetApplicationCommandOutput | GameLiftStreamsServiceException>> => {
  let reason;
  try {
    let result: GetApplicationCommandOutput & any = await client.send(new GetApplicationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "READY") {
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
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until an application is ready
 *  @deprecated Use waitUntilApplicationReady instead. waitForApplicationReady does not throw error in non-success cases.
 */
export const waitForApplicationReady = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult<GetApplicationCommandOutput | GameLiftStreamsServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until an application is ready
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetApplicationCommand for polling.
 */
export const waitUntilApplicationReady = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult<GetApplicationCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetApplicationCommandOutput>;
};
