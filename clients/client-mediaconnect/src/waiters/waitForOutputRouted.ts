// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetRouterOutputCommand, GetRouterOutputCommandInput } from "../commands/GetRouterOutputCommand";
import { MediaConnectClient } from "../MediaConnectClient";

const checkState = async (client: MediaConnectClient, input: GetRouterOutputCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetRouterOutputCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.RouterOutput.RoutedState;
      }
      if (returnComparator() === "ROUTED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.RouterOutput.RoutedState;
      }
      if (returnComparator() === "ROUTING") {
        return { state: WaiterState.RETRY, reason };
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
 * Wait until the Output is ROUTED
 *  @deprecated Use waitUntilOutputRouted instead. waitForOutputRouted does not throw error in non-success cases.
 */
export const waitForOutputRouted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Output is ROUTED
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterOutputCommand for polling.
 */
export const waitUntilOutputRouted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
