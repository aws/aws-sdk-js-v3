// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import { DescribeCodeReviewCommand, DescribeCodeReviewCommandInput } from "../commands/DescribeCodeReviewCommand";

const checkState = async (
  client: CodeGuruReviewerClient,
  input: DescribeCodeReviewCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeCodeReviewCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.CodeReview.State;
      };
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.CodeReview.State;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.CodeReview.State;
      };
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
