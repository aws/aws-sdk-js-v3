// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetAnnotationImportJobCommand,
  GetAnnotationImportJobCommandInput,
} from "../commands/GetAnnotationImportJobCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetAnnotationImportJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetAnnotationImportJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "SUBMITTED") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
