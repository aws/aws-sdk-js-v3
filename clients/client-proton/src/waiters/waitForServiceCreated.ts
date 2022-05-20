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
      if (returnComparator() === "CREATE_FAILED_CLEANUP_COMPLETE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "CREATE_FAILED_CLEANUP_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an Service has deployed its instances and possibly pipeline. Use this after invoking CreateService
 *  @deprecated Use waitUntilServiceCreated instead. waitForServiceCreated does not throw error in non-success cases.
 */
export const waitForServiceCreated = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an Service has deployed its instances and possibly pipeline. Use this after invoking CreateService
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceCommand for polling.
 */
export const waitUntilServiceCreated = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
