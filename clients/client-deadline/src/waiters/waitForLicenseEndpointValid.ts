// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetLicenseEndpointCommand, GetLicenseEndpointCommandInput } from "../commands/GetLicenseEndpointCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetLicenseEndpointCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetLicenseEndpointCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
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
