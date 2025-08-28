// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeFHIRExportJobCommand,
  DescribeFHIRExportJobCommandInput,
} from "../commands/DescribeFHIRExportJobCommand";
import { HealthLakeClient } from "../HealthLakeClient";

const checkState = async (
  client: HealthLakeClient,
  input: DescribeFHIRExportJobCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeFHIRExportJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      };
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      };
      if (returnComparator() === "COMPLETED_WITH_ERRORS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      };
      if (returnComparator() === "CANCEL_COMPLETED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      };
      if (returnComparator() === "CANCEL_FAILED") {
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
 *  @deprecated Use waitUntilFHIRExportJobCompleted instead. waitForFHIRExportJobCompleted does not throw error in non-success cases.
 */
export const waitForFHIRExportJobCompleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeFHIRExportJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFHIRExportJobCommand for polling.
 */
export const waitUntilFHIRExportJobCompleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeFHIRExportJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
