// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterCommand,
} from "../commands/DescribeClusterCommand";
import type {
  Route53RecoveryControlConfigServiceException,
} from "../models/Route53RecoveryControlConfigServiceException";
import type { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";

const checkState = async (client: Route53RecoveryControlConfigClient, input: DescribeClusterCommandInput): Promise<WaiterResult<DescribeClusterCommandOutput | Route53RecoveryControlConfigServiceException>> => {
  let reason;
  try {
    let result: DescribeClusterCommandOutput & any = await client.send(new DescribeClusterCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Cluster.Status;
      }
      if (returnComparator() === "DEPLOYED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Cluster.Status;
      }
      if (returnComparator() === "PENDING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InternalServerException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a cluster is created
 *  @deprecated Use waitUntilClusterCreated instead. waitForClusterCreated does not throw error in non-success cases.
 */
export const waitForClusterCreated = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult<DescribeClusterCommandOutput | Route53RecoveryControlConfigServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a cluster is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export const waitUntilClusterCreated = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult<DescribeClusterCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeClusterCommandOutput>;
};
