// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeContactVersionCommandInput,
  DescribeContactVersionCommand,
} from "../commands/DescribeContactVersionCommand";
import type { GroundStationClient } from "../GroundStationClient";

const checkState = async (client: GroundStationClient, input: DescribeContactVersionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeContactVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.version.status;
      }
      if (returnComparator() === "FAILED_TO_UPDATE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.version.status;
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
 * Waits until a contact has been updated
 *  @deprecated Use waitUntilContactUpdated instead. waitForContactUpdated does not throw error in non-success cases.
 */
export const waitForContactUpdated = async (
  params: WaiterConfiguration<GroundStationClient>,
  input: DescribeContactVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until a contact has been updated
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeContactVersionCommand for polling.
 */
export const waitUntilContactUpdated = async (
  params: WaiterConfiguration<GroundStationClient>,
  input: DescribeContactVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
