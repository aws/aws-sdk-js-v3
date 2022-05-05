// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeMultiplexCommand, DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: DescribeMultiplexCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeMultiplexCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "DELETING") {
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
 * Wait until a multiplex has been deleted
 *  @deprecated Use waitUntilMultiplexDeleted instead. waitForMultiplexDeleted does not throw error in non-success cases.
 */
export const waitForMultiplexDeleted = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a multiplex has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export const waitUntilMultiplexDeleted = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
