// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetRouterOutputCommand, GetRouterOutputCommandInput } from "../commands/GetRouterOutputCommand";
import { MediaConnectClient } from "../MediaConnectClient";

const checkState = async (client: MediaConnectClient, input: GetRouterOutputCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetRouterOutputCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.RouterOutput.State;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.RouterOutput.State;
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
 * Wait until the Output is deleted
 *  @deprecated Use waitUntilOutputDeleted instead. waitForOutputDeleted does not throw error in non-success cases.
 */
export const waitForOutputDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the Output is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRouterOutputCommand for polling.
 */
export const waitUntilOutputDeleted = async (
  params: WaiterConfiguration<MediaConnectClient>,
  input: GetRouterOutputCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
