// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { AmpClient } from "../AmpClient";
import {
  type DescribeWorkspaceCommandInput,
  type DescribeWorkspaceCommandOutput,
  DescribeWorkspaceCommand,
} from "../commands/DescribeWorkspaceCommand";
import type { AmpServiceException } from "../models/AmpServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: AmpClient, input: DescribeWorkspaceCommandInput): Promise<WaiterResult<DescribeWorkspaceCommandOutput | AmpServiceException>> => {
  let reason;
  try {
    let result: DescribeWorkspaceCommandOutput & any = await client.send(new DescribeWorkspaceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.workspace.status.statusCode;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a workspace reaches DELETED status
 *  @deprecated Use waitUntilWorkspaceDeleted instead. waitForWorkspaceDeleted does not throw error in non-success cases.
 */
export const waitForWorkspaceDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeWorkspaceCommandInput
): Promise<WaiterResult<DescribeWorkspaceCommandOutput | AmpServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a workspace reaches DELETED status
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeWorkspaceCommand for polling.
 */
export const waitUntilWorkspaceDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeWorkspaceCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
