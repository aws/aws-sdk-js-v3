import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeChannelCommand, DescribeChannelCommandInput } from "../commands/DescribeChannelCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaLiveClient, input: DescribeChannelCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeChannelCommand(input));
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "IDLE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "STOPPING") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a channel has is stopped
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeChannelCommand for polling.
 */
export const waitForChannelStopped = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
