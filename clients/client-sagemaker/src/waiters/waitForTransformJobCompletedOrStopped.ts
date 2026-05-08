// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeTransformJobCommandInput,
  type DescribeTransformJobCommandOutput,
  DescribeTransformJobCommand,
} from "../commands/DescribeTransformJobCommand";
import type { SageMakerServiceException } from "../models/SageMakerServiceException";
import type { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeTransformJobCommandInput): Promise<WaiterResult<DescribeTransformJobCommandOutput | SageMakerServiceException>> => {
  let reason;
  try {
    let result: DescribeTransformJobCommandOutput & any = await client.send(new DescribeTransformJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.TransformJobStatus;
      }
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TransformJobStatus;
      }
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TransformJobStatus;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ValidationException") {
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
): Promise<WaiterResult<DescribeTransformJobCommandOutput | SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
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
): Promise<WaiterResult<DescribeTransformJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeTransformJobCommandOutput>;
};
