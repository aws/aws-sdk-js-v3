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
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
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
 * Waits until the event bus reports ACTIVE. Use after CreateEventBus (bus starts in CREATING) or UpdateEventBus (bus moves to UPDATING) before invoking operations that require an ACTIVE bus. Fails fast on the terminal failure states CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED, surfacing StateReason. CREATING, UPDATING, and DELETING are intentionally unmodeled intermediate states that fall through to the implicit retry.
 *  @deprecated Use waitUntilEventBusActive instead. waitForEventBusActive does not throw error in non-success cases.
 */
export const waitForEventBusActive = async (
  params: WaiterConfiguration<EventBridgeV2Client>,
  input: DescribeEventBusCommandInput
): Promise<WaiterResult<DescribeEventBusCommandOutput | EventBridgeV2ServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until the event bus reports ACTIVE. Use after CreateEventBus (bus starts in CREATING) or UpdateEventBus (bus moves to UPDATING) before invoking operations that require an ACTIVE bus. Fails fast on the terminal failure states CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED, surfacing StateReason. CREATING, UPDATING, and DELETING are intentionally unmodeled intermediate states that fall through to the implicit retry.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEventBusCommand for polling.
 */
export const waitUntilEventBusActive = async (
  params: WaiterConfiguration<EventBridgeV2Client>,
  input: DescribeEventBusCommandInput
): Promise<WaiterResult<DescribeEventBusCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeEventBusCommandOutput>;
};
