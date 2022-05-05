// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetStreamingSessionStreamCommand,
  GetStreamingSessionStreamCommandInput,
} from "../commands/GetStreamingSessionStreamCommand";
import { NimbleClient } from "../NimbleClient";

const checkState = async (
  client: NimbleClient,
  input: GetStreamingSessionStreamCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetStreamingSessionStreamCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.stream.state;
      };
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.stream.state;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a StreamingSessionStream is ready. Use this after invoking CreateStreamingSessionStream
 *  @deprecated Use waitUntilStreamingSessionStreamReady instead. waitForStreamingSessionStreamReady does not throw error in non-success cases.
 */
export const waitForStreamingSessionStreamReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStreamingSessionStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 150 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a StreamingSessionStream is ready. Use this after invoking CreateStreamingSessionStream
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamingSessionStreamCommand for polling.
 */
export const waitUntilStreamingSessionStreamReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStreamingSessionStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 150 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
