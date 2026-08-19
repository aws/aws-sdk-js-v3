// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeUpdateCommandInput,
  type DescribeUpdateCommandOutput,
  DescribeUpdateCommand,
} from "../commands/DescribeUpdateCommand";
import type { EKSClient } from "../EKSClient";
import type { EKSServiceException } from "../models/EKSServiceException";

const checkState = async (client: EKSClient, input: DescribeUpdateCommandInput): Promise<WaiterResult<DescribeUpdateCommandOutput | EKSServiceException>> => {
  let reason;
  try {
    let result: DescribeUpdateCommandOutput & any = await client.send(new DescribeUpdateCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.update.status;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.update.status;
      }
      if (returnComparator() === "Cancelled") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.update.status;
      }
      if (returnComparator() === "Successful") {
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
 *  @deprecated Use waitUntilCertificateAuthorityUpdateComplete instead. waitForCertificateAuthorityUpdateComplete does not throw error in non-success cases.
 */
export const waitForCertificateAuthorityUpdateComplete = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeUpdateCommandInput
): Promise<WaiterResult<DescribeUpdateCommandOutput | EKSServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeUpdateCommand for polling.
 */
export const waitUntilCertificateAuthorityUpdateComplete = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeUpdateCommandInput
): Promise<WaiterResult<DescribeUpdateCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeUpdateCommandOutput>;
};
