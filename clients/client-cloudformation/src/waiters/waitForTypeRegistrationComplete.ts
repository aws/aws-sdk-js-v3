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
  type DescribeTypeRegistrationCommandInput,
  type DescribeTypeRegistrationCommandOutput,
  DescribeTypeRegistrationCommand,
} from "../commands/DescribeTypeRegistrationCommand";
import type { CloudFormationServiceException } from "../models/CloudFormationServiceException";

const checkState = async (client: CloudFormationClient, input: DescribeTypeRegistrationCommandInput): Promise<WaiterResult<DescribeTypeRegistrationCommandOutput | CloudFormationServiceException>> => {
  let reason;
  try {
    let result: DescribeTypeRegistrationCommandOutput & any = await client.send(new DescribeTypeRegistrationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ProgressStatus;
      }
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProgressStatus;
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
 * Wait until type registration is COMPLETE.
 *  @deprecated Use waitUntilTypeRegistrationComplete instead. waitForTypeRegistrationComplete does not throw error in non-success cases.
 */
export const waitForTypeRegistrationComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeTypeRegistrationCommandInput
): Promise<WaiterResult<DescribeTypeRegistrationCommandOutput | CloudFormationServiceException>> => {
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
): Promise<WaiterResult<DescribeTypeRegistrationCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeTypeRegistrationCommandOutput>;
};
