// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetVariantStoreCommandInput,
  type GetVariantStoreCommandOutput,
  GetVariantStoreCommand,
} from "../commands/GetVariantStoreCommand";
import type { OmicsServiceException } from "../models/OmicsServiceException";
import type { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetVariantStoreCommandInput): Promise<WaiterResult<GetVariantStoreCommandOutput | OmicsServiceException>> => {
  let reason;
  try {
    let result: GetVariantStoreCommandOutput & any = await client.send(new GetVariantStoreCommand(input));
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
 * Wait until a variant store is created
 *  @deprecated Use waitUntilVariantStoreCreated instead. waitForVariantStoreCreated does not throw error in non-success cases.
 */
export const waitForVariantStoreCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetVariantStoreCommandInput
): Promise<WaiterResult<GetVariantStoreCommandOutput | OmicsServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a variant store is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetVariantStoreCommand for polling.
 */
export const waitUntilVariantStoreCreated = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetVariantStoreCommandInput
): Promise<WaiterResult<GetVariantStoreCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetVariantStoreCommandOutput>;
};
