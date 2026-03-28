// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetLicenseEndpointCommandInput, GetLicenseEndpointCommand } from "../commands/GetLicenseEndpointCommand";
import type { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetLicenseEndpointCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetLicenseEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "NOT_READY") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a LicenseEndpoint is Ready. Use this after invoking CreateLicenseEndpoint.
 *  @deprecated Use waitUntilLicenseEndpointValid instead. waitForLicenseEndpointValid does not throw error in non-success cases.
 */
export const waitForLicenseEndpointValid = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetLicenseEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1140 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a LicenseEndpoint is Ready. Use this after invoking CreateLicenseEndpoint.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLicenseEndpointCommand for polling.
 */
export const waitUntilLicenseEndpointValid = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetLicenseEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1140 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
