// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeSigningJobCommandInput,
  type DescribeSigningJobCommandOutput,
  DescribeSigningJobCommand,
} from "../commands/DescribeSigningJobCommand";
import type { SignerServiceException } from "../models/SignerServiceException";
import type { SignerClient } from "../SignerClient";

const checkState = async (client: SignerClient, input: DescribeSigningJobCommandInput): Promise<WaiterResult<DescribeSigningJobCommandOutput | SignerServiceException>> => {
  let reason;
  try {
    let result: DescribeSigningJobCommandOutput & any = await client.send(new DescribeSigningJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSuccessfulSigningJob instead. waitForSuccessfulSigningJob does not throw error in non-success cases.
 */
export const waitForSuccessfulSigningJob = async (
  params: WaiterConfiguration<SignerClient>,
  input: DescribeSigningJobCommandInput
): Promise<WaiterResult<DescribeSigningJobCommandOutput | SignerServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSigningJobCommand for polling.
 */
export const waitUntilSuccessfulSigningJob = async (
  params: WaiterConfiguration<SignerClient>,
  input: DescribeSigningJobCommandInput
): Promise<WaiterResult<DescribeSigningJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeSigningJobCommandOutput>;
};
