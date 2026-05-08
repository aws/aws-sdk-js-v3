// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeEndpointCommandInput,
  type DescribeEndpointCommandOutput,
  DescribeEndpointCommand,
} from "../commands/DescribeEndpointCommand";
import type { SageMakerServiceException } from "../models/SageMakerServiceException";
import type { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeEndpointCommandInput): Promise<WaiterResult<DescribeEndpointCommandOutput | SageMakerServiceException>> => {
  let reason;
  try {
    let result: DescribeEndpointCommandOutput & any = await client.send(new DescribeEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.EndpointStatus;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ValidationException") {
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
): Promise<WaiterResult<DescribeEndpointCommandOutput | SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
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
): Promise<WaiterResult<SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<SageMakerServiceException>;
};
