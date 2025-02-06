// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStackRefactorCommand,
  DescribeStackRefactorCommandInput,
} from "../commands/DescribeStackRefactorCommand";

const checkState = async (
  client: CloudFormationClient,
  input: DescribeStackRefactorCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeStackRefactorCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ExecutionStatus;
      };
      if (returnComparator() === "EXECUTE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExecutionStatus;
      };
      if (returnComparator() === "EXECUTE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExecutionStatus;
      };
      if (returnComparator() === "ROLLBACK_COMPLETE") {
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
 * Wait until the stack refactor status is EXECUTE_COMPLETE.
 *  @deprecated Use waitUntilStackRefactorExecuteComplete instead. waitForStackRefactorExecuteComplete does not throw error in non-success cases.
 */
export const waitForStackRefactorExecuteComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the stack refactor status is EXECUTE_COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStackRefactorCommand for polling.
 */
export const waitUntilStackRefactorExecuteComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
