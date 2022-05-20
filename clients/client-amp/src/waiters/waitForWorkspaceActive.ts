// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { AmpClient } from "../AmpClient";
import { DescribeWorkspaceCommand, DescribeWorkspaceCommandInput } from "../commands/DescribeWorkspaceCommand";

const checkState = async (client: AmpClient, input: DescribeWorkspaceCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeWorkspaceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.workspace.status.statusCode;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.workspace.status.statusCode;
      };
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.workspace.status.statusCode;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a workspace reaches ACTIVE status
 *  @deprecated Use waitUntilWorkspaceActive instead. waitForWorkspaceActive does not throw error in non-success cases.
 */
export const waitForWorkspaceActive = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeWorkspaceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a workspace reaches ACTIVE status
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeWorkspaceCommand for polling.
 */
export const waitUntilWorkspaceActive = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeWorkspaceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
