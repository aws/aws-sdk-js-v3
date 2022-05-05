// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeClusterCommand, DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { EKSClient } from "../EKSClient";

const checkState = async (client: EKSClient, input: DescribeClusterCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeClusterCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.cluster.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.cluster.status;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.cluster.status;
      };
      if (returnComparator() === "PENDING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilClusterDeleted instead. waitForClusterDeleted does not throw error in non-success cases.
 */
export const waitForClusterDeleted = async (
  params: WaiterConfiguration<EKSClient>,
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
export const waitUntilClusterDeleted = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
