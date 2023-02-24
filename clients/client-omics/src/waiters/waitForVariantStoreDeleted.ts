// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetVariantStoreCommand, GetVariantStoreCommandInput } from "../commands/GetVariantStoreCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetVariantStoreCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetVariantStoreCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a variant store is deleted.
 *  @deprecated Use waitUntilVariantStoreDeleted instead. waitForVariantStoreDeleted does not throw error in non-success cases.
 */
export const waitForVariantStoreDeleted = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetVariantStoreCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a variant store is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetVariantStoreCommand for polling.
 */
export const waitUntilVariantStoreDeleted = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetVariantStoreCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
