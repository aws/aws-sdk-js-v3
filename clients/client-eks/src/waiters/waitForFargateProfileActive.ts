// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeFargateProfileCommandInput,
  type DescribeFargateProfileCommandOutput,
  DescribeFargateProfileCommand,
} from "../commands/DescribeFargateProfileCommand";
import type { EKSClient } from "../EKSClient";
import type { EKSServiceException } from "../models/EKSServiceException";

const checkState = async (client: EKSClient, input: DescribeFargateProfileCommandInput): Promise<WaiterResult<DescribeFargateProfileCommandOutput | EKSServiceException>> => {
  let reason;
  try {
    let result: DescribeFargateProfileCommandOutput & any = await client.send(new DescribeFargateProfileCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.fargateProfile.status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.fargateProfile.status;
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
 *  @deprecated Use waitUntilFargateProfileActive instead. waitForFargateProfileActive does not throw error in non-success cases.
 */
export const waitForFargateProfileActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeFargateProfileCommandInput
): Promise<WaiterResult<DescribeFargateProfileCommandOutput | EKSServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFargateProfileCommand for polling.
 */
export const waitUntilFargateProfileActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeFargateProfileCommandInput
): Promise<WaiterResult<DescribeFargateProfileCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeFargateProfileCommandOutput>;
};
