// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeAppsCommand, DescribeAppsCommandInput } from "../commands/DescribeAppsCommand";
import { OpsWorksClient } from "../OpsWorksClient";

const checkState = async (client: OpsWorksClient, input: DescribeAppsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeAppsCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    return { state: WaiterState.FAILURE, reason };
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAppExists instead. waitForAppExists does not throw error in non-success cases.
 */
export const waitForAppExists = async (
  params: WaiterConfiguration<OpsWorksClient>,
  input: DescribeAppsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAppsCommand for polling.
 */
export const waitUntilAppExists = async (
  params: WaiterConfiguration<OpsWorksClient>,
  input: DescribeAppsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
