// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeImageVersionCommand, DescribeImageVersionCommandInput } from "../commands/DescribeImageVersionCommand";
import { SageMakerClient } from "../SageMakerClient";

const checkState = async (client: SageMakerClient, input: DescribeImageVersionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeImageVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ImageVersionStatus;
      };
      if (returnComparator() === "CREATED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ImageVersionStatus;
      };
      if (returnComparator() === "CREATE_FAILED") {
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
 *  @deprecated Use waitUntilImageVersionCreated instead. waitForImageVersionCreated does not throw error in non-success cases.
 */
export const waitForImageVersionCreated = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageVersionCommand for polling.
 */
export const waitUntilImageVersionCreated = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeImageVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
