// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeNodegroupCommand, DescribeNodegroupCommandInput } from "../commands/DescribeNodegroupCommand";
import { EKSClient } from "../EKSClient";

const checkState = async (client: EKSClient, input: DescribeNodegroupCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeNodegroupCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.nodegroup.status;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.nodegroup.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilNodegroupActive instead. waitForNodegroupActive does not throw error in non-success cases.
 */
export const waitForNodegroupActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeNodegroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodegroupCommand for polling.
 */
export const waitUntilNodegroupActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeNodegroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
