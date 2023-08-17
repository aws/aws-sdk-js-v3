// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  GetAnnotationStoreVersionCommand,
  GetAnnotationStoreVersionCommandInput,
} from "../commands/GetAnnotationStoreVersionCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetAnnotationStoreVersionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetAnnotationStoreVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "UPDATING") {
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
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an annotation store version is created
 *  @deprecated Use waitUntilAnnotationStoreVersionCreated instead. waitForAnnotationStoreVersionCreated does not throw error in non-success cases.
 */
export const waitForAnnotationStoreVersionCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationStoreVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an annotation store version is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAnnotationStoreVersionCommand for polling.
 */
export const waitUntilAnnotationStoreVersionCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationStoreVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
