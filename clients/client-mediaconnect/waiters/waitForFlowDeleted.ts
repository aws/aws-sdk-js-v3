import { MediaConnectClient } from "../MediaConnectClient";
import { DescribeFlowCommand, DescribeFlowCommandInput } from "../commands/DescribeFlowCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaConnectClient, input: DescribeFlowCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeFlowCommand(input));
    try {
      let returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "NotFoundException") {
      return { state: WaiterState.SUCCESS };
    }
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY };
    }
    if (exception.name && exception.name == "ServiceUnavailableException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a flow is deleted
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeFlowCommand for polling.
 */
export const waitForFlowDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
