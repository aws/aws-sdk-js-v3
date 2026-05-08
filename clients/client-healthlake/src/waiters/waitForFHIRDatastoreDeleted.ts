// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeFHIRDatastoreCommandInput,
  type DescribeFHIRDatastoreCommandOutput,
  DescribeFHIRDatastoreCommand,
} from "../commands/DescribeFHIRDatastoreCommand";
import type { HealthLakeClient } from "../HealthLakeClient";
import type { HealthLakeServiceException } from "../models/HealthLakeServiceException";

const checkState = async (client: HealthLakeClient, input: DescribeFHIRDatastoreCommandInput): Promise<WaiterResult<DescribeFHIRDatastoreCommandOutput | HealthLakeServiceException>> => {
  let reason;
  try {
    let result: DescribeFHIRDatastoreCommandOutput & any = await client.send(new DescribeFHIRDatastoreCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.DatastoreProperties.DatastoreStatus;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilFHIRDatastoreDeleted instead. waitForFHIRDatastoreDeleted does not throw error in non-success cases.
 */
export const waitForFHIRDatastoreDeleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeFHIRDatastoreCommandInput
): Promise<WaiterResult<DescribeFHIRDatastoreCommandOutput | HealthLakeServiceException>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFHIRDatastoreCommand for polling.
 */
export const waitUntilFHIRDatastoreDeleted = async (
  params: WaiterConfiguration<HealthLakeClient>,
  input: DescribeFHIRDatastoreCommandInput
): Promise<WaiterResult<DescribeFHIRDatastoreCommandOutput>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeFHIRDatastoreCommandOutput>;
};
