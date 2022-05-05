// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeImageCommand, DescribeImageCommandInput } from "../commands/DescribeImageCommand";
import { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeImageCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeImageCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ImageStatus;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name && exception.name == "ValidationException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilImageDeleted instead. waitForImageDeleted does not throw error in non-success cases.
 */
export const waitForImageDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageCommand for polling.
 */
export const waitUntilImageDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
