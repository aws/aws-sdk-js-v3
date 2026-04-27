// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { AutoScalingClient } from "../AutoScalingClient";
import {
  type DescribeAutoScalingGroupsCommandInput,
  type DescribeAutoScalingGroupsCommandOutput,
  DescribeAutoScalingGroupsCommand,
} from "../commands/DescribeAutoScalingGroupsCommand";
import type { AutoScalingServiceException } from "../models/AutoScalingServiceException";

const checkState = async (client: AutoScalingClient, input: DescribeAutoScalingGroupsCommandInput): Promise<WaiterResult<DescribeAutoScalingGroupsCommandOutput | AutoScalingServiceException>> => {
  let reason;
  try {
    let result: DescribeAutoScalingGroupsCommandOutput & any = await client.send(new DescribeAutoScalingGroupsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return (result.AutoScalingGroups.length > 0);
      }
      if (returnComparator() == false) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return (result.AutoScalingGroups.length > 0);
      }
      if (returnComparator() == true) {
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
 *  @deprecated Use waitUntilGroupNotExists instead. waitForGroupNotExists does not throw error in non-success cases.
 */
export const waitForGroupNotExists = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult<DescribeAutoScalingGroupsCommandOutput | AutoScalingServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export const waitUntilGroupNotExists = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult<DescribeAutoScalingGroupsCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeAutoScalingGroupsCommandOutput>;
};
