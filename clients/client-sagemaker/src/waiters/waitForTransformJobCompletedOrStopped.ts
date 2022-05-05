// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeTransformJobCommand, DescribeTransformJobCommandInput } from "../commands/DescribeTransformJobCommand";
import { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeTransformJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeTransformJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.TransformJobStatus;
      };
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TransformJobStatus;
      };
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TransformJobStatus;
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
 *  @deprecated Use waitUntilTransformJobCompletedOrStopped instead. waitForTransformJobCompletedOrStopped does not throw error in non-success cases.
 */
export const waitForTransformJobCompletedOrStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeTransformJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTransformJobCommand for polling.
 */
export const waitUntilTransformJobCompletedOrStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeTransformJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
