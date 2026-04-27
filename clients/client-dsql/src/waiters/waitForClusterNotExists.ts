// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetClusterCommandInput,
  type GetClusterCommandOutput,
  GetClusterCommand,
} from "../commands/GetClusterCommand";
import type { DSQLClient } from "../DSQLClient";
import type { DSQLServiceException } from "../models/DSQLServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: DSQLClient, input: GetClusterCommandInput): Promise<WaiterResult<GetClusterCommandOutput | DSQLServiceException>> => {
  let reason;
  try {
    let result: GetClusterCommandOutput & any = await client.send(new GetClusterCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Cluster is gone
 *  @deprecated Use waitUntilClusterNotExists instead. waitForClusterNotExists does not throw error in non-success cases.
 */
export const waitForClusterNotExists = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult<GetClusterCommandOutput | DSQLServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Cluster is gone
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetClusterCommand for polling.
 */
export const waitUntilClusterNotExists = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
