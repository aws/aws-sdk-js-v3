// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeProcessingJobCommand,
  DescribeProcessingJobCommandInput,
} from "../commands/DescribeProcessingJobCommand";
import { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeProcessingJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeProcessingJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ProcessingJobStatus;
      };
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProcessingJobStatus;
      };
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProcessingJobStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ValidationException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilProcessingJobCompletedOrStopped instead. waitForProcessingJobCompletedOrStopped does not throw error in non-success cases.
 */
export const waitForProcessingJobCompletedOrStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeProcessingJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeProcessingJobCommand for polling.
 */
export const waitUntilProcessingJobCompletedOrStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeProcessingJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
