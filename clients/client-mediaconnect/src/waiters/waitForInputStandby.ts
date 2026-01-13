// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetRouterInputCommand, GetRouterInputCommandInput } from "../commands/GetRouterInputCommand";
import { MediaConnectClient } from "../MediaConnectClient";

const checkState = async (client: MediaConnectClient, input: GetRouterInputCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetRouterInputCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "STANDBY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterInput.State;
      }
      if (returnComparator() === "STOPPING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
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
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until the Input is STANDBY
 *  @deprecated Use waitUntilInputStandby instead. waitForInputStandby does not throw error in non-success cases.
 */
export const waitForInputStandby = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Input is STANDBY
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterInputCommand for polling.
 */
export const waitUntilInputStandby = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterInputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
