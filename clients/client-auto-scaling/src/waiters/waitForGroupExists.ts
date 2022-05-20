// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
} from "../commands/DescribeAutoScalingGroupsCommand";

const checkState = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeAutoScalingGroupsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.AutoScalingGroups.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AutoScalingGroups.length > 0.0;
      };
      if (returnComparator() == false) {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilGroupExists instead. waitForGroupExists does not throw error in non-success cases.
 */
export const waitForGroupExists = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export const waitUntilGroupExists = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
