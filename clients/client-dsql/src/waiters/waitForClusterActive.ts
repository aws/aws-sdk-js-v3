// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetClusterCommandInput,
  type GetClusterCommandOutput,
  GetClusterCommand,
} from "../commands/GetClusterCommand";
import type { DSQLClient } from "../DSQLClient";
import type { DSQLServiceException } from "../models/DSQLServiceException";

const checkState = async (client: DSQLClient, input: GetClusterCommandInput): Promise<WaiterResult<GetClusterCommandOutput | DSQLServiceException>> => {
  let reason;
  try {
    let result: GetClusterCommandOutput & any = await client.send(new GetClusterCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Cluster is ACTIVE
 *  @deprecated Use waitUntilClusterActive instead. waitForClusterActive does not throw error in non-success cases.
 */
export const waitForClusterActive = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult<GetClusterCommandOutput | DSQLServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Cluster is ACTIVE
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetClusterCommand for polling.
 */
export const waitUntilClusterActive = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult<GetClusterCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetClusterCommandOutput>;
};
