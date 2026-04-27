// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeFHIRExportJobCommandInput,
  type DescribeFHIRExportJobCommandOutput,
  DescribeFHIRExportJobCommand,
} from "../commands/DescribeFHIRExportJobCommand";
import type { HealthLakeClient } from "../HealthLakeClient";
import type { HealthLakeServiceException } from "../models/HealthLakeServiceException";

const checkState = async (client: HealthLakeClient, input: DescribeFHIRExportJobCommandInput): Promise<WaiterResult<DescribeFHIRExportJobCommandOutput | HealthLakeServiceException>> => {
  let reason;
  try {
    let result: DescribeFHIRExportJobCommandOutput & any = await client.send(new DescribeFHIRExportJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      }
      if (returnComparator() === "COMPLETED_WITH_ERRORS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      }
      if (returnComparator() === "CANCEL_COMPLETED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ExportJobProperties.JobStatus;
      }
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
): Promise<WaiterResult<DescribeFHIRExportJobCommandOutput | HealthLakeServiceException>> => {
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
): Promise<WaiterResult<DescribeFHIRExportJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeFHIRExportJobCommandOutput>;
};
