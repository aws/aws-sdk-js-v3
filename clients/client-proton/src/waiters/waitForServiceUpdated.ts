// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetServiceCommand, GetServiceCommandInput } from "../commands/GetServiceCommand";
import { ProtonClient } from "../ProtonClient";

const checkState = async (client: ProtonClient, input: GetServiceCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetServiceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "UPDATE_FAILED_CLEANUP_COMPLETE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "UPDATE_FAILED_CLEANUP_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "UPDATE_COMPLETE_CLEANUP_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Service, its instances, and possibly pipeline have been deployed after UpdateService is invoked
 *  @deprecated Use waitUntilServiceUpdated instead. waitForServiceUpdated does not throw error in non-success cases.
 */
export const waitForServiceUpdated = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Service, its instances, and possibly pipeline have been deployed after UpdateService is invoked
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceCommand for polling.
 */
export const waitUntilServiceUpdated = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
