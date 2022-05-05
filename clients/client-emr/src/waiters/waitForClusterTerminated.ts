// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeClusterCommand, DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { EMRClient } from "../EMRClient";

const checkState = async (client: EMRClient, input: DescribeClusterCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeClusterCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Cluster.Status.State;
      };
      if (returnComparator() === "TERMINATED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Cluster.Status.State;
      };
      if (returnComparator() === "TERMINATED_WITH_ERRORS") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilClusterTerminated instead. waitForClusterTerminated does not throw error in non-success cases.
 */
export const waitForClusterTerminated = async (
  params: WaiterConfiguration<EMRClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export const waitUntilClusterTerminated = async (
  params: WaiterConfiguration<EMRClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
