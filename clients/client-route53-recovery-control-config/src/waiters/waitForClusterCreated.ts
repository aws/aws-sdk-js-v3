// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeClusterCommand, DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";

const checkState = async (
  client: Route53RecoveryControlConfigClient,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeClusterCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Cluster.Status;
      };
      if (returnComparator() === "DEPLOYED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Cluster.Status;
      };
      if (returnComparator() === "PENDING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InternalServerException") {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
