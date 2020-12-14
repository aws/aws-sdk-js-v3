import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeMultiplexCommand, DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaLiveClient, input: DescribeMultiplexCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeMultiplexCommand(input));
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "RUNNING") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "STARTING") {
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
 * Wait until a multiplex is running
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeMultiplexCommand for polling.
 */
export const waitForMultiplexRunning = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeMultiplexCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
