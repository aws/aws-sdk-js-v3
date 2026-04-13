// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetConnectionCommandInput, GetConnectionCommand } from "../commands/GetConnectionCommand";
import type { InterconnectClient } from "../InterconnectClient";

const checkState = async (client: InterconnectClient, input: GetConnectionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetConnectionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.connection.state;
      }
      if (returnComparator() === "available") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.connection.state;
      }
      if (returnComparator() === "deleted") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.connection.state;
      }
      if (returnComparator() === "down") {
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
 *  @deprecated Use waitUntilConnectionAvailable instead. waitForConnectionAvailable does not throw error in non-success cases.
 */
export const waitForConnectionAvailable = async (
  params: WaiterConfiguration<InterconnectClient>,
  input: GetConnectionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetConnectionCommand for polling.
 */
export const waitUntilConnectionAvailable = async (
  params: WaiterConfiguration<InterconnectClient>,
  input: GetConnectionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
