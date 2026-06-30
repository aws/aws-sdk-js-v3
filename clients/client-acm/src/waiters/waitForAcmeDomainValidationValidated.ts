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
  type DescribeAcmeDomainValidationCommandInput,
  type DescribeAcmeDomainValidationCommandOutput,
  DescribeAcmeDomainValidationCommand,
} from "../commands/DescribeAcmeDomainValidationCommand";
import type { ACMServiceException } from "../models/ACMServiceException";

const checkState = async (client: ACMClient, input: DescribeAcmeDomainValidationCommandInput): Promise<WaiterResult<DescribeAcmeDomainValidationCommandOutput | ACMServiceException>> => {
  let reason;
  try {
    let result: DescribeAcmeDomainValidationCommandOutput & any = await client.send(new DescribeAcmeDomainValidationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.AcmeDomainValidation.Status;
      }
      if (returnComparator() === "VALID") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AcmeDomainValidation.Status;
      }
      if (returnComparator() === "INVALID") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AcmeDomainValidation.Status;
      }
      if (returnComparator() === "VALIDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an ACME domain validation reaches a terminal validation state.
 *  @deprecated Use waitUntilAcmeDomainValidationValidated instead. waitForAcmeDomainValidationValidated does not throw error in non-success cases.
 */
export const waitForAcmeDomainValidationValidated = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeAcmeDomainValidationCommandInput
): Promise<WaiterResult<DescribeAcmeDomainValidationCommandOutput | ACMServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an ACME domain validation reaches a terminal validation state.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAcmeDomainValidationCommand for polling.
 */
export const waitUntilAcmeDomainValidationValidated = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeAcmeDomainValidationCommandInput
): Promise<WaiterResult<DescribeAcmeDomainValidationCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeAcmeDomainValidationCommandOutput>;
};
