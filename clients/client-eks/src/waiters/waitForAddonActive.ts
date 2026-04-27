// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeAddonCommandInput,
  type DescribeAddonCommandOutput,
  DescribeAddonCommand,
} from "../commands/DescribeAddonCommand";
import type { EKSClient } from "../EKSClient";
import type { EKSServiceException } from "../models/EKSServiceException";

const checkState = async (client: EKSClient, input: DescribeAddonCommandInput): Promise<WaiterResult<DescribeAddonCommandOutput | EKSServiceException>> => {
  let reason;
  try {
    let result: DescribeAddonCommandOutput & any = await client.send(new DescribeAddonCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.addon.status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.addon.status;
      }
      if (returnComparator() === "DEGRADED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.addon.status;
      }
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
): Promise<WaiterResult<DescribeAddonCommandOutput | EKSServiceException>> => {
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
): Promise<WaiterResult<DescribeAddonCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeAddonCommandOutput>;
};
