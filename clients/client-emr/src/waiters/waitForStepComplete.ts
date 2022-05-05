// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeStepCommand, DescribeStepCommandInput } from "../commands/DescribeStepCommand";
import { EMRClient } from "../EMRClient";

const checkState = async (client: EMRClient, input: DescribeStepCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeStepCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Step.Status.State;
      };
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Step.Status.State;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Step.Status.State;
      };
      if (returnComparator() === "CANCELLED") {
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
 *  @deprecated Use waitUntilStepComplete instead. waitForStepComplete does not throw error in non-success cases.
 */
export const waitForStepComplete = async (
  params: WaiterConfiguration<EMRClient>,
  input: DescribeStepCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStepCommand for polling.
 */
export const waitUntilStepComplete = async (
  params: WaiterConfiguration<EMRClient>,
  input: DescribeStepCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
