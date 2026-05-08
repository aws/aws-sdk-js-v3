// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeFlowCommandInput,
  type DescribeFlowCommandOutput,
  DescribeFlowCommand,
} from "../commands/DescribeFlowCommand";
import type { MediaConnectClient } from "../MediaConnectClient";
import type { NotFoundException } from "../models/errors";
import type { MediaConnectServiceException } from "../models/MediaConnectServiceException";

const checkState = async (client: MediaConnectClient, input: DescribeFlowCommandInput): Promise<WaiterResult<DescribeFlowCommandOutput | MediaConnectServiceException>> => {
  let reason;
  try {
    let result: DescribeFlowCommandOutput & any = await client.send(new DescribeFlowCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Flow.Status;
      }
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "NotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name === "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name === "ServiceUnavailableException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a flow is deleted
 *  @deprecated Use waitUntilFlowDeleted instead. waitForFlowDeleted does not throw error in non-success cases.
 */
export const waitForFlowDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult<DescribeFlowCommandOutput | MediaConnectServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a flow is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
export const waitUntilFlowDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: DescribeFlowCommandInput
): Promise<WaiterResult<NotFoundException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<NotFoundException>;
};
