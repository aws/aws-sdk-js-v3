// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { CloudFormationClient } from "../CloudFormationClient";
import { type DescribeChangeSetCommandInput, DescribeChangeSetCommand } from "../commands/DescribeChangeSetCommand";

const checkState = async (client: CloudFormationClient, input: DescribeChangeSetCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeChangeSetCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "CREATE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ValidationError") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until change set status is CREATE_COMPLETE.
 *  @deprecated Use waitUntilChangeSetCreateComplete instead. waitForChangeSetCreateComplete does not throw error in non-success cases.
 */
export const waitForChangeSetCreateComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeChangeSetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until change set status is CREATE_COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChangeSetCommand for polling.
 */
export const waitUntilChangeSetCreateComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeChangeSetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
