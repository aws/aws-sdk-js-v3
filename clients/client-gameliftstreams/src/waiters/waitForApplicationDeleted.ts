// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetApplicationCommand, GetApplicationCommandInput } from "../commands/GetApplicationCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";

const checkState = async (client: GameLiftStreamsClient, input: GetApplicationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetApplicationCommand(input));
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
 * Waits until an application is deleted
 *  @deprecated Use waitUntilApplicationDeleted instead. waitForApplicationDeleted does not throw error in non-success cases.
 */
export const waitForApplicationDeleted = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
