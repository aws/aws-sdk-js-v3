// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetServiceCommandInput,
  type GetServiceCommandOutput,
  GetServiceCommand,
} from "../commands/GetServiceCommand";
import type { ProtonServiceException } from "../models/ProtonServiceException";
import type { ProtonClient } from "../ProtonClient";

const checkState = async (client: ProtonClient, input: GetServiceCommandInput): Promise<WaiterResult<GetServiceCommandOutput | ProtonServiceException>> => {
  let reason;
  try {
    let result: GetServiceCommandOutput & any = await client.send(new GetServiceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.service.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      }
      if (returnComparator() === "CREATE_FAILED_CLEANUP_COMPLETE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      }
      if (returnComparator() === "CREATE_FAILED_CLEANUP_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.status;
      }
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
): Promise<WaiterResult<GetServiceCommandOutput | ProtonServiceException>> => {
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
): Promise<WaiterResult<GetServiceCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetServiceCommandOutput>;
};
