// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { ACMClient } from "../ACMClient";
import {
  type DescribeAcmeEndpointCommandInput,
  type DescribeAcmeEndpointCommandOutput,
  DescribeAcmeEndpointCommand,
} from "../commands/DescribeAcmeEndpointCommand";
import type { ACMServiceException } from "../models/ACMServiceException";

const checkState = async (client: ACMClient, input: DescribeAcmeEndpointCommandInput): Promise<WaiterResult<DescribeAcmeEndpointCommandOutput | ACMServiceException>> => {
  let reason;
  try {
    let result: DescribeAcmeEndpointCommandOutput & any = await client.send(new DescribeAcmeEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.AcmeEndpoint.Status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AcmeEndpoint.Status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AcmeEndpoint.Status;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an ACME endpoint has finished provisioning and is ACTIVE.
 *  @deprecated Use waitUntilAcmeEndpointActive instead. waitForAcmeEndpointActive does not throw error in non-success cases.
 */
export const waitForAcmeEndpointActive = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeAcmeEndpointCommandInput
): Promise<WaiterResult<DescribeAcmeEndpointCommandOutput | ACMServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an ACME endpoint has finished provisioning and is ACTIVE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAcmeEndpointCommand for polling.
 */
export const waitUntilAcmeEndpointActive = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeAcmeEndpointCommandInput
): Promise<WaiterResult<DescribeAcmeEndpointCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeAcmeEndpointCommandOutput>;
};
