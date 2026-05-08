// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeTrainingJobCommandInput,
  type DescribeTrainingJobCommandOutput,
  DescribeTrainingJobCommand,
} from "../commands/DescribeTrainingJobCommand";
import type { SageMakerServiceException } from "../models/SageMakerServiceException";
import type { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeTrainingJobCommandInput): Promise<WaiterResult<DescribeTrainingJobCommandOutput | SageMakerServiceException>> => {
  let reason;
  try {
    let result: DescribeTrainingJobCommandOutput & any = await client.send(new DescribeTrainingJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.TrainingJobStatus;
      }
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TrainingJobStatus;
      }
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TrainingJobStatus;
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
 *  @deprecated Use waitUntilTrainingJobCompletedOrStopped instead. waitForTrainingJobCompletedOrStopped does not throw error in non-success cases.
 */
export const waitForTrainingJobCompletedOrStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeTrainingJobCommandInput
): Promise<WaiterResult<DescribeTrainingJobCommandOutput | SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 21600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTrainingJobCommand for polling.
 */
export const waitUntilTrainingJobCompletedOrStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeTrainingJobCommandInput
): Promise<WaiterResult<DescribeTrainingJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 21600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeTrainingJobCommandOutput>;
};
