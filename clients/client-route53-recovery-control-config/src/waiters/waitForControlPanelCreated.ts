import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { DescribeControlPanelCommand, DescribeControlPanelCommandInput } from "../commands/DescribeControlPanelCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: Route53RecoveryControlConfigClient,
  input: DescribeControlPanelCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeControlPanelCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.ControlPanel.Status;
      };
      if (returnComparator() === "DEPLOYED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.ControlPanel.Status;
      };
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
