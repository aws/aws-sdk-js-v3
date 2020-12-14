import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeInputCommand, DescribeInputCommandInput } from "../commands/DescribeInputCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaLiveClient, input: DescribeInputCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeInputCommand(input));
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "ATTACHED") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "DETACHED") {
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
 * Wait until an input has been attached
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeInputCommand for polling.
 */
export const waitForInputAttached = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
