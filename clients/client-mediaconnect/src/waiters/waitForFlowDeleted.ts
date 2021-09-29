import { MediaConnectClient } from "../MediaConnectClient";
import { DescribeFlowCommand, DescribeFlowCommandInput } from "../commands/DescribeFlowCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: MediaConnectClient, input: DescribeFlowCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeFlowCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Flow.Status;
      };
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name && exception.name == "ServiceUnavailableException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a flow is deleted
 *  @deprecated Use waitUntilFlowDeleted instead. waitForFlowDeleted does not throw error in non-success cases.
 */
export const waitForFlowDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a flow is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
export const waitUntilFlowDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
