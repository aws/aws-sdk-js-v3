// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetLicenseEndpointCommand, GetLicenseEndpointCommandInput } from "../commands/GetLicenseEndpointCommand";
import { DeadlineClient } from "../DeadlineClient";

const checkState = async (client: DeadlineClient, input: GetLicenseEndpointCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetLicenseEndpointCommand(input));
    reason = result;
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
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a LicenseEndpoint is Deleted. Use this after invoking DeleteLicenseEndpoint.
 *  @deprecated Use waitUntilLicenseEndpointDeleted instead. waitForLicenseEndpointDeleted does not throw error in non-success cases.
 */
export const waitForLicenseEndpointDeleted = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetLicenseEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 2340 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a LicenseEndpoint is Deleted. Use this after invoking DeleteLicenseEndpoint.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLicenseEndpointCommand for polling.
 */
export const waitUntilLicenseEndpointDeleted = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetLicenseEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 2340 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
