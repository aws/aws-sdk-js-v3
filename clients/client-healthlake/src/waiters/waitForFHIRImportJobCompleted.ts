// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeFHIRImportJobCommand,
  DescribeFHIRImportJobCommandInput,
} from "../commands/DescribeFHIRImportJobCommand";
import { HealthLakeClient } from "../HealthLakeClient";

const checkState = async (client: HealthLakeClient, input: DescribeFHIRImportJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeFHIRImportJobCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.ImportJobProperties.JobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.ImportJobProperties.JobStatus;
      }
      if (returnComparator() === "COMPLETED_WITH_ERRORS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.ImportJobProperties.JobStatus;
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
 *
 *  @deprecated Use waitUntilFHIRImportJobCompleted instead. waitForFHIRImportJobCompleted does not throw error in non-success cases.
 */
export const waitForFHIRImportJobCompleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeFHIRImportJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFHIRImportJobCommand for polling.
 */
export const waitUntilFHIRImportJobCompleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeFHIRImportJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
