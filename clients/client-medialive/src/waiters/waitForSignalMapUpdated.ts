// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetSignalMapCommand, GetSignalMapCommandInput } from "../commands/GetSignalMapCommand";
import { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: GetSignalMapCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetSignalMapCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "UPDATE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "UPDATE_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "UPDATE_REVERTED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a signal map has been updated
 *  @deprecated Use waitUntilSignalMapUpdated instead. waitForSignalMapUpdated does not throw error in non-success cases.
 */
export const waitForSignalMapUpdated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: GetSignalMapCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a signal map has been updated
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSignalMapCommand for polling.
 */
export const waitUntilSignalMapUpdated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: GetSignalMapCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
