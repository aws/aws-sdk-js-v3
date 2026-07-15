// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeDataTransformationJobCommandInput,
  type DescribeDataTransformationJobCommandOutput,
  DescribeDataTransformationJobCommand,
} from "../commands/DescribeDataTransformationJobCommand";
import type { HealthLakeClient } from "../HealthLakeClient";
import type { HealthLakeServiceException } from "../models/HealthLakeServiceException";

const checkState = async (client: HealthLakeClient, input: DescribeDataTransformationJobCommandInput): Promise<WaiterResult<DescribeDataTransformationJobCommandOutput | HealthLakeServiceException>> => {
  let reason;
  try {
    let result: DescribeDataTransformationJobCommandOutput & any = await client.send(new DescribeDataTransformationJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.TransformationJobProperties.JobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TransformationJobProperties.JobStatus;
      }
      if (returnComparator() === "COMPLETED_WITH_ERRORS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.TransformationJobProperties.JobStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilDataTransformationJobCompleted instead. waitForDataTransformationJobCompleted does not throw error in non-success cases.
 */
export const waitForDataTransformationJobCompleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeDataTransformationJobCommandInput
): Promise<WaiterResult<DescribeDataTransformationJobCommandOutput | HealthLakeServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDataTransformationJobCommand for polling.
 */
export const waitUntilDataTransformationJobCompleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeDataTransformationJobCommandInput
): Promise<WaiterResult<DescribeDataTransformationJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeDataTransformationJobCommandOutput>;
};
