// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type DescribeNodeCommandInput, DescribeNodeCommand } from "../commands/DescribeNodeCommand";
import type { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: DescribeNodeCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeNodeCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "REGISTERING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "REGISTRATION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NotFoundException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a node has been registered
 *  @deprecated Use waitUntilNodeRegistered instead. waitForNodeRegistered does not throw error in non-success cases.
 */
export const waitForNodeRegistered = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeNodeCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a node has been registered
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodeCommand for polling.
 */
export const waitUntilNodeRegistered = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeNodeCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
