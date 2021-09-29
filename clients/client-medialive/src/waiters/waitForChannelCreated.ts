import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeChannelCommand, DescribeChannelCommandInput } from "../commands/DescribeChannelCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaLiveClient, input: DescribeChannelCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeChannelCommand(input));
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
 * Wait until a channel has been created
 *  @deprecated Use waitUntilChannelCreated instead. waitForChannelCreated does not throw error in non-success cases.
 */
export const waitForChannelCreated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a channel has been created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
export const waitUntilChannelCreated = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
