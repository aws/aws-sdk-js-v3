// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetAnnotationStoreCommandInput,
  type GetAnnotationStoreCommandOutput,
  GetAnnotationStoreCommand,
} from "../commands/GetAnnotationStoreCommand";
import type { OmicsServiceException } from "../models/OmicsServiceException";
import type { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetAnnotationStoreCommandInput): Promise<WaiterResult<GetAnnotationStoreCommandOutput | OmicsServiceException>> => {
  let reason;
  try {
    let result: GetAnnotationStoreCommandOutput & any = await client.send(new GetAnnotationStoreCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATING") {
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
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an annotation store is created
 *  @deprecated Use waitUntilAnnotationStoreCreated instead. waitForAnnotationStoreCreated does not throw error in non-success cases.
 */
export const waitForAnnotationStoreCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationStoreCommandInput
): Promise<WaiterResult<GetAnnotationStoreCommandOutput | OmicsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an annotation store is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAnnotationStoreCommand for polling.
 */
export const waitUntilAnnotationStoreCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationStoreCommandInput
): Promise<WaiterResult<GetAnnotationStoreCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetAnnotationStoreCommandOutput>;
};
