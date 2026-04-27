// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetAnnotationStoreVersionCommandInput,
  type GetAnnotationStoreVersionCommandOutput,
  GetAnnotationStoreVersionCommand,
} from "../commands/GetAnnotationStoreVersionCommand";
import type { ResourceNotFoundException } from "../models/errors";
import type { OmicsServiceException } from "../models/OmicsServiceException";
import type { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetAnnotationStoreVersionCommandInput): Promise<WaiterResult<GetAnnotationStoreVersionCommandOutput | OmicsServiceException>> => {
  let reason;
  try {
    let result: GetAnnotationStoreVersionCommandOutput & any = await client.send(new GetAnnotationStoreVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an annotation store version is deleted.
 *  @deprecated Use waitUntilAnnotationStoreVersionDeleted instead. waitForAnnotationStoreVersionDeleted does not throw error in non-success cases.
 */
export const waitForAnnotationStoreVersionDeleted = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationStoreVersionCommandInput
): Promise<WaiterResult<GetAnnotationStoreVersionCommandOutput | OmicsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an annotation store version is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAnnotationStoreVersionCommand for polling.
 */
export const waitUntilAnnotationStoreVersionDeleted = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetAnnotationStoreVersionCommandInput
): Promise<WaiterResult<GetAnnotationStoreVersionCommandOutput | ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetAnnotationStoreVersionCommandOutput | ResourceNotFoundException>;
};
