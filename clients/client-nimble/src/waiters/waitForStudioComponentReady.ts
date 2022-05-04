// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetStudioComponentCommand, GetStudioComponentCommandInput } from "../commands/GetStudioComponentCommand";
import { NimbleClient } from "../NimbleClient";

const checkState = async (client: NimbleClient, input: GetStudioComponentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetStudioComponentCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.studioComponent.state;
      };
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.studioComponent.state;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.studioComponent.state;
      };
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a StudioComponent is Ready. Use this after invoking CreateStudioComponent or UpdateStudioComponent
 *  @deprecated Use waitUntilStudioComponentReady instead. waitForStudioComponentReady does not throw error in non-success cases.
 */
export const waitForStudioComponentReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStudioComponentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a StudioComponent is Ready. Use this after invoking CreateStudioComponent or UpdateStudioComponent
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStudioComponentCommand for polling.
 */
export const waitUntilStudioComponentReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStudioComponentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
