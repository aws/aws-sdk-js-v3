// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeImageVersionCommandInput,
  type DescribeImageVersionCommandOutput,
  DescribeImageVersionCommand,
} from "../commands/DescribeImageVersionCommand";
import type { SageMakerServiceException } from "../models/SageMakerServiceException";
import type { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeImageVersionCommandInput): Promise<WaiterResult<DescribeImageVersionCommandOutput | SageMakerServiceException>> => {
  let reason;
  try {
    let result: DescribeImageVersionCommandOutput & any = await client.send(new DescribeImageVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ImageVersionStatus;
      }
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name === "ValidationException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilImageVersionDeleted instead. waitForImageVersionDeleted does not throw error in non-success cases.
 */
export const waitForImageVersionDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageVersionCommandInput
): Promise<WaiterResult<DescribeImageVersionCommandOutput | SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageVersionCommand for polling.
 */
export const waitUntilImageVersionDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageVersionCommandInput
): Promise<WaiterResult<SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<SageMakerServiceException>;
};
