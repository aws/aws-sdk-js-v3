// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeTypeRegistrationCommand,
  DescribeTypeRegistrationCommandInput,
} from "../commands/DescribeTypeRegistrationCommand";

const checkState = async (
  client: CloudFormationClient,
  input: DescribeTypeRegistrationCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeTypeRegistrationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ProgressStatus;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProgressStatus;
      };
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
 * Wait until type registration is COMPLETE.
 *  @deprecated Use waitUntilTypeRegistrationComplete instead. waitForTypeRegistrationComplete does not throw error in non-success cases.
 */
export const waitForTypeRegistrationComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeTypeRegistrationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until type registration is COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTypeRegistrationCommand for polling.
 */
export const waitUntilTypeRegistrationComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeTypeRegistrationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
