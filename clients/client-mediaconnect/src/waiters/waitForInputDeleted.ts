// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetRouterInputCommand, GetRouterInputCommandInput } from "../commands/GetRouterInputCommand";
import { MediaConnectClient } from "../MediaConnectClient";

const checkState = async (client: MediaConnectClient, input: GetRouterInputCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetRouterInputCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "ERROR") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name && exception.name == "ServiceUnavailableException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name && exception.name == "NotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until the Input is deleted
 *  @deprecated Use waitUntilInputDeleted instead. waitForInputDeleted does not throw error in non-success cases.
 */
export const waitForInputDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Input is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterInputCommand for polling.
 */
export const waitUntilInputDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
