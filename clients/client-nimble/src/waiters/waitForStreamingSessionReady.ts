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
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.session.state;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.session.state;
      };
      if (returnComparator() === "START_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a StreamingSession is ready. Use this after invoking CreateStreamingSession, StartStreamingSession
 *  @deprecated Use waitUntilStreamingSessionReady instead. waitForStreamingSessionReady does not throw error in non-success cases.
 */
export const waitForStreamingSessionReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStreamingSessionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a StreamingSession is ready. Use this after invoking CreateStreamingSession, StartStreamingSession
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamingSessionCommand for polling.
 */
export const waitUntilStreamingSessionReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStreamingSessionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
