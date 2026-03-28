// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommand,
} from "../commands/DescribeLanguageModelCommand";
import type { TranscribeClient } from "../TranscribeClient";

const checkState = async (client: TranscribeClient, input: DescribeLanguageModelCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeLanguageModelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.LanguageModel.ModelStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.LanguageModel.ModelStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilLanguageModelCompleted instead. waitForLanguageModelCompleted does not throw error in non-success cases.
 */
export const waitForLanguageModelCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: DescribeLanguageModelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeLanguageModelCommand for polling.
 */
export const waitUntilLanguageModelCompleted = async (
  params: WaiterConfiguration<TranscribeClient>,
  input: DescribeLanguageModelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
