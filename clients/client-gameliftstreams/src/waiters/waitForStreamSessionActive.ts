// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetStreamSessionCommand, GetStreamSessionCommandInput } from "../commands/GetStreamSessionCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";

const checkState = async (client: GameLiftStreamsClient, input: GetStreamSessionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetStreamSessionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "ACTIVE") {
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
 * Waits until a stream session is active
 *  @deprecated Use waitUntilStreamSessionActive instead. waitForStreamSessionActive does not throw error in non-success cases.
 */
export const waitForStreamSessionActive = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetStreamSessionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until a stream session is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamSessionCommand for polling.
 */
export const waitUntilStreamSessionActive = async (
  params: WaiterConfiguration<GameLiftStreamsClient>,
  input: GetStreamSessionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
