// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  type DescribeCodeReviewCommandInput,
  type DescribeCodeReviewCommandOutput,
  DescribeCodeReviewCommand,
} from "../commands/DescribeCodeReviewCommand";
import type { CodeGuruReviewerServiceException } from "../models/CodeGuruReviewerServiceException";

const checkState = async (client: CodeGuruReviewerClient, input: DescribeCodeReviewCommandInput): Promise<WaiterResult<DescribeCodeReviewCommandOutput | CodeGuruReviewerServiceException>> => {
  let reason;
  try {
    let result: DescribeCodeReviewCommandOutput & any = await client.send(new DescribeCodeReviewCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.CodeReview.State;
      }
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.CodeReview.State;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.CodeReview.State;
      }
      if (returnComparator() === "Pending") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a code review is complete.
 *  @deprecated Use waitUntilCodeReviewCompleted instead. waitForCodeReviewCompleted does not throw error in non-success cases.
 */
export const waitForCodeReviewCompleted = async (
  params: WaiterConfiguration<CodeGuruReviewerClient>,
  input: DescribeCodeReviewCommandInput
): Promise<WaiterResult<DescribeCodeReviewCommandOutput | CodeGuruReviewerServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a code review is complete.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCodeReviewCommand for polling.
 */
export const waitUntilCodeReviewCompleted = async (
  params: WaiterConfiguration<CodeGuruReviewerClient>,
  input: DescribeCodeReviewCommandInput
): Promise<WaiterResult<DescribeCodeReviewCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeCodeReviewCommandOutput>;
};
