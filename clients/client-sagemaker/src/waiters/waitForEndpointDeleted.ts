// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeEndpointCommand, DescribeEndpointCommandInput } from "../commands/DescribeEndpointCommand";
import { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeEndpointCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.EndpointStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ValidationException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilEndpointDeleted instead. waitForEndpointDeleted does not throw error in non-success cases.
 */
export const waitForEndpointDeleted = async (
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
export const waitUntilEndpointDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
