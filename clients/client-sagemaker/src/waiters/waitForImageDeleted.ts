// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeImageCommandInput,
  type DescribeImageCommandOutput,
  DescribeImageCommand,
} from "../commands/DescribeImageCommand";
import type { SageMakerServiceException } from "../models/SageMakerServiceException";
import type { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeImageCommandInput): Promise<WaiterResult<DescribeImageCommandOutput | SageMakerServiceException>> => {
  let reason;
  try {
    let result: DescribeImageCommandOutput & any = await client.send(new DescribeImageCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ImageStatus;
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
 *  @deprecated Use waitUntilImageDeleted instead. waitForImageDeleted does not throw error in non-success cases.
 */
export const waitForImageDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageCommandInput
): Promise<WaiterResult<DescribeImageCommandOutput | SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
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
): Promise<WaiterResult<SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<SageMakerServiceException>;
};
