// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetApplicationCommand, GetApplicationCommandInput } from "../commands/GetApplicationCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";

const checkState = async (client: GameLiftStreamsClient, input: GetApplicationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetApplicationCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
