// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeRoutingControlCommand,
  DescribeRoutingControlCommandInput,
} from "../commands/DescribeRoutingControlCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";

const checkState = async (
  client: Route53RecoveryControlConfigClient,
  input: DescribeRoutingControlCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeRoutingControlCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.RoutingControl.Status;
      };
      if (returnComparator() === "DEPLOYED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RoutingControl.Status;
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
 * Wait until a routing control is created
 *  @deprecated Use waitUntilRoutingControlCreated instead. waitForRoutingControlCreated does not throw error in non-success cases.
 */
export const waitForRoutingControlCreated = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeRoutingControlCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a routing control is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeRoutingControlCommand for polling.
 */
export const waitUntilRoutingControlCreated = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeRoutingControlCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
