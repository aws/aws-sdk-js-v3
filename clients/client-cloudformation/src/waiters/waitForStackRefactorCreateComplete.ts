// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStackRefactorCommand,
  DescribeStackRefactorCommandInput,
} from "../commands/DescribeStackRefactorCommand";

const checkState = async (client: CloudFormationClient, input: DescribeStackRefactorCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeStackRefactorCommand(input));
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
      if (returnComparator() === "CREATE_FAILED") {
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
 * Wait until the stack refactor status is CREATE_COMPLETE.
 *  @deprecated Use waitUntilStackRefactorCreateComplete instead. waitForStackRefactorCreateComplete does not throw error in non-success cases.
 */
export const waitForStackRefactorCreateComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the stack refactor status is CREATE_COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStackRefactorCommand for polling.
 */
export const waitUntilStackRefactorCreateComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
