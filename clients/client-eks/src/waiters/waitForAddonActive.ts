// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeAddonCommand, DescribeAddonCommandInput } from "../commands/DescribeAddonCommand";
import { EKSClient } from "../EKSClient";

const checkState = async (client: EKSClient, input: DescribeAddonCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeAddonCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.addon.status;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.addon.status;
      };
      if (returnComparator() === "DEGRADED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.addon.status;
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
 *  @deprecated Use waitUntilAddonActive instead. waitForAddonActive does not throw error in non-success cases.
 */
export const waitForAddonActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeAddonCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAddonCommand for polling.
 */
export const waitUntilAddonActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeAddonCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
