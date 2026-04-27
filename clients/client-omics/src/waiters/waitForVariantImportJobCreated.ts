// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetVariantImportJobCommandInput,
  type GetVariantImportJobCommandOutput,
  GetVariantImportJobCommand,
} from "../commands/GetVariantImportJobCommand";
import type { OmicsServiceException } from "../models/OmicsServiceException";
import type { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetVariantImportJobCommandInput): Promise<WaiterResult<GetVariantImportJobCommandOutput | OmicsServiceException>> => {
  let reason;
  try {
    let result: GetVariantImportJobCommandOutput & any = await client.send(new GetVariantImportJobCommand(input));
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
 * Wait until variant import is completed
 *  @deprecated Use waitUntilVariantImportJobCreated instead. waitForVariantImportJobCreated does not throw error in non-success cases.
 */
export const waitForVariantImportJobCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetVariantImportJobCommandInput
): Promise<WaiterResult<GetVariantImportJobCommandOutput | OmicsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until variant import is completed
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetVariantImportJobCommand for polling.
 */
export const waitUntilVariantImportJobCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetVariantImportJobCommandInput
): Promise<WaiterResult<GetVariantImportJobCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetVariantImportJobCommandOutput>;
};
