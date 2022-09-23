// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetStreamingSessionCommand, GetStreamingSessionCommandInput } from "../commands/GetStreamingSessionCommand";
import { NimbleClient } from "../NimbleClient";

const checkState = async (client: NimbleClient, input: GetStreamingSessionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetStreamingSessionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.session.state;
      };
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.session.state;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a StreamingSessionDeleted. Use this after invoking DeleteStreamingSession
 *  @deprecated Use waitUntilStreamingSessionDeleted instead. waitForStreamingSessionDeleted does not throw error in non-success cases.
 */
export const waitForStreamingSessionDeleted = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStreamingSessionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a StreamingSessionDeleted. Use this after invoking DeleteStreamingSession
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamingSessionCommand for polling.
 */
export const waitUntilStreamingSessionDeleted = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStreamingSessionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
