import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeMultiplexCommand, DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaLiveClient, input: DescribeMultiplexCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeMultiplexCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "IDLE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
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
 * Wait until a multiplex has been created
 *  @deprecated Use waitUntilMultiplexCreated instead. waitForMultiplexCreated does not throw error in non-success cases.
 */
export const waitForMultiplexCreated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a multiplex has been created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export const waitUntilMultiplexCreated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
