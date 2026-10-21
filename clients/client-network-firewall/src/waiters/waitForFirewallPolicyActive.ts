// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeFirewallPolicyCommandInput,
  type DescribeFirewallPolicyCommandOutput,
  DescribeFirewallPolicyCommand,
} from "../commands/DescribeFirewallPolicyCommand";
import type { NetworkFirewallServiceException } from "../models/NetworkFirewallServiceException";
import type { NetworkFirewallClient } from "../NetworkFirewallClient";

const checkState = async (client: NetworkFirewallClient, input: DescribeFirewallPolicyCommandInput): Promise<WaiterResult<DescribeFirewallPolicyCommandOutput | NetworkFirewallServiceException>> => {
  let reason;
  try {
    let result: DescribeFirewallPolicyCommandOutput & any = await client.send(new DescribeFirewallPolicyCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.FirewallPolicyResponse.FirewallPolicyStatus;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.FirewallPolicyResponse.FirewallPolicyStatus;
      }
      if (returnComparator() === "ERROR") {
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
 *  @deprecated Use waitUntilFirewallPolicyActive instead. waitForFirewallPolicyActive does not throw error in non-success cases.
 */
export const waitForFirewallPolicyActive = async (
  params: WaiterConfiguration<NetworkFirewallClient>,
  input: DescribeFirewallPolicyCommandInput
): Promise<WaiterResult<DescribeFirewallPolicyCommandOutput | NetworkFirewallServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFirewallPolicyCommand for polling.
 */
export const waitUntilFirewallPolicyActive = async (
  params: WaiterConfiguration<NetworkFirewallClient>,
  input: DescribeFirewallPolicyCommandInput
): Promise<WaiterResult<DescribeFirewallPolicyCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeFirewallPolicyCommandOutput>;
};
