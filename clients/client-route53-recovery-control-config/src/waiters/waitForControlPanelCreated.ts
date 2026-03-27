// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeControlPanelCommandInput,
  DescribeControlPanelCommand,
} from "../commands/DescribeControlPanelCommand";
import type { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";

const checkState = async (client: Route53RecoveryControlConfigClient, input: DescribeControlPanelCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeControlPanelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ControlPanel.Status;
      }
      if (returnComparator() === "DEPLOYED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ControlPanel.Status;
      }
      if (returnComparator() === "PENDING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InternalServerException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a control panel is created
 *  @deprecated Use waitUntilControlPanelCreated instead. waitForControlPanelCreated does not throw error in non-success cases.
 */
export const waitForControlPanelCreated = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeControlPanelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a control panel is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeControlPanelCommand for polling.
 */
export const waitUntilControlPanelCreated = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeControlPanelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
