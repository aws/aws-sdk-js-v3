// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeSubscriberCommandInput,
  type DescribeSubscriberCommandOutput,
  DescribeSubscriberCommand,
} from "../commands/DescribeSubscriberCommand";
import type { EventBridgeV2Client } from "../EventBridgeV2Client";
import type { EventBridgeV2ServiceException } from "../models/EventBridgeV2ServiceException";

const checkState = async (client: EventBridgeV2Client, input: DescribeSubscriberCommandInput): Promise<WaiterResult<DescribeSubscriberCommandOutput | EventBridgeV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeSubscriberCommandOutput & any = await client.send(new DescribeSubscriberCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.SubscriberDetails.MskDetails.ConnectivityState;
      }
      if (returnComparator() === "PROVISION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.SubscriberDetails.MskDetails.ConnectivityState;
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
 * Waits until an Amazon MSK subscriber's connectivity reports ACTIVE. Use after CreateSubscriber or UpdateSubscriber on a subscriber that targets an MSK cluster. Fails fast on PROVISION_FAILED, surfacing MskDetails.StateReason. PROVISIONING falls through to the implicit retry. Applies only to MSK subscribers; other subscribers return no MskDetails, so the waiter times out.
 *  @deprecated Use waitUntilMskSubscriberActive instead. waitForMskSubscriberActive does not throw error in non-success cases.
 */
export const waitForMskSubscriberActive = async (
  params: WaiterConfiguration<EventBridgeV2Client>,
  input: DescribeSubscriberCommandInput
): Promise<WaiterResult<DescribeSubscriberCommandOutput | EventBridgeV2ServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until an Amazon MSK subscriber's connectivity reports ACTIVE. Use after CreateSubscriber or UpdateSubscriber on a subscriber that targets an MSK cluster. Fails fast on PROVISION_FAILED, surfacing MskDetails.StateReason. PROVISIONING falls through to the implicit retry. Applies only to MSK subscribers; other subscribers return no MskDetails, so the waiter times out.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSubscriberCommand for polling.
 */
export const waitUntilMskSubscriberActive = async (
  params: WaiterConfiguration<EventBridgeV2Client>,
  input: DescribeSubscriberCommandInput
): Promise<WaiterResult<DescribeSubscriberCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeSubscriberCommandOutput>;
};
