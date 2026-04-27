// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { CloudFormationClient } from "../CloudFormationClient";
import {
  type DescribeStackRefactorCommandInput,
  type DescribeStackRefactorCommandOutput,
  DescribeStackRefactorCommand,
} from "../commands/DescribeStackRefactorCommand";
import type { CloudFormationServiceException } from "../models/CloudFormationServiceException";

const checkState = async (client: CloudFormationClient, input: DescribeStackRefactorCommandInput): Promise<WaiterResult<DescribeStackRefactorCommandOutput | CloudFormationServiceException>> => {
  let reason;
  try {
    let result: DescribeStackRefactorCommandOutput & any = await client.send(new DescribeStackRefactorCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ExecutionStatus;
      }
      if (returnComparator() === "EXECUTE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExecutionStatus;
      }
      if (returnComparator() === "EXECUTE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExecutionStatus;
      }
      if (returnComparator() === "ROLLBACK_COMPLETE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ValidationError") {
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
): Promise<WaiterResult<DescribeStackRefactorCommandOutput | CloudFormationServiceException>> => {
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
): Promise<WaiterResult<DescribeStackRefactorCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeStackRefactorCommandOutput>;
};
