// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetAnnotationImportJobCommandInput,
  type GetAnnotationImportJobCommandOutput,
  GetAnnotationImportJobCommand,
} from "../commands/GetAnnotationImportJobCommand";
import type { OmicsServiceException } from "../models/OmicsServiceException";
import type { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetAnnotationImportJobCommandInput): Promise<WaiterResult<GetAnnotationImportJobCommandOutput | OmicsServiceException>> => {
  let reason;
  try {
    let result: GetAnnotationImportJobCommandOutput & any = await client.send(new GetAnnotationImportJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "SUBMITTED") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an annotation import is completed
 *  @deprecated Use waitUntilAnnotationImportJobCreated instead. waitForAnnotationImportJobCreated does not throw error in non-success cases.
 */
export const waitForAnnotationImportJobCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationImportJobCommandInput
): Promise<WaiterResult<GetAnnotationImportJobCommandOutput | OmicsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an annotation import is completed
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAnnotationImportJobCommand for polling.
 */
export const waitUntilAnnotationImportJobCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationImportJobCommandInput
): Promise<WaiterResult<GetAnnotationImportJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetAnnotationImportJobCommandOutput>;
};
