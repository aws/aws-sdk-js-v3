// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeEventBusCommandInput,
  type DescribeEventBusCommandOutput,
  DescribeEventBusCommand,
} from "../commands/DescribeEventBusCommand";
import type { EventBridgeV2Client } from "../EventBridgeV2Client";
import type { ResourceNotFoundException } from "../models/errors";
import type { EventBridgeV2ServiceException } from "../models/EventBridgeV2ServiceException";

const checkState = async (client: EventBridgeV2Client, input: DescribeEventBusCommandInput): Promise<WaiterResult<DescribeEventBusCommandOutput | EventBridgeV2ServiceException>> => {
  let reason;
  try {
    let result: DescribeEventBusCommandOutput & any = await client.send(new DescribeEventBusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until the event bus is fully deleted, signaled by DescribeEventBus returning ResourceNotFoundException. Use after DeleteEventBus. Fails fast on the terminal DELETE_FAILED state, surfacing StateReason; retry DeleteEventBus after removing subscribers.
 *  @deprecated Use waitUntilEventBusDeleted instead. waitForEventBusDeleted does not throw error in non-success cases.
 */
export const waitForEventBusDeleted = async (
  params: WaiterConfiguration<EventBridgeV2Client>,
  input: DescribeEventBusCommandInput
): Promise<WaiterResult<DescribeEventBusCommandOutput | EventBridgeV2ServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until the event bus is fully deleted, signaled by DescribeEventBus returning ResourceNotFoundException. Use after DeleteEventBus. Fails fast on the terminal DELETE_FAILED state, surfacing StateReason; retry DeleteEventBus after removing subscribers.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEventBusCommand for polling.
 */
export const waitUntilEventBusDeleted = async (
  params: WaiterConfiguration<EventBridgeV2Client>,
  input: DescribeEventBusCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
