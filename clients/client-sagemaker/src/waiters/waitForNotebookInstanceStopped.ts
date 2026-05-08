// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeNotebookInstanceCommandInput,
  type DescribeNotebookInstanceCommandOutput,
  DescribeNotebookInstanceCommand,
} from "../commands/DescribeNotebookInstanceCommand";
import type { SageMakerServiceException } from "../models/SageMakerServiceException";
import type { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeNotebookInstanceCommandInput): Promise<WaiterResult<DescribeNotebookInstanceCommandOutput | SageMakerServiceException>> => {
  let reason;
  try {
    let result: DescribeNotebookInstanceCommandOutput & any = await client.send(new DescribeNotebookInstanceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.NotebookInstanceStatus;
      }
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.NotebookInstanceStatus;
      }
      if (returnComparator() === "Failed") {
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
 *  @deprecated Use waitUntilNotebookInstanceStopped instead. waitForNotebookInstanceStopped does not throw error in non-success cases.
 */
export const waitForNotebookInstanceStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult<DescribeNotebookInstanceCommandOutput | SageMakerServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNotebookInstanceCommand for polling.
 */
export const waitUntilNotebookInstanceStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult<DescribeNotebookInstanceCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeNotebookInstanceCommandOutput>;
};
