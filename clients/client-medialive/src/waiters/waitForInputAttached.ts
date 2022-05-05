// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeInputCommand, DescribeInputCommandInput } from "../commands/DescribeInputCommand";
import { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: DescribeInputCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeInputCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "ATTACHED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "DETACHED") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an input has been attached
 *  @deprecated Use waitUntilInputAttached instead. waitForInputAttached does not throw error in non-success cases.
 */
export const waitForInputAttached = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an input has been attached
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
export const waitUntilInputAttached = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
