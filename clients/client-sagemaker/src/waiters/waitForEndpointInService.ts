import { SageMakerClient } from "../SageMakerClient";
import { DescribeEndpointCommand, DescribeEndpointCommandInput } from "../commands/DescribeEndpointCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: SageMakerClient, input: DescribeEndpointCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeEndpointCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.EndpointStatus;
      };
      if (returnComparator() === "InService") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.EndpointStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ValidationException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilEndpointInService instead. waitForEndpointInService does not throw error in non-success cases.
 */
export const waitForEndpointInService = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEndpointCommand for polling.
 */
export const waitUntilEndpointInService = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
