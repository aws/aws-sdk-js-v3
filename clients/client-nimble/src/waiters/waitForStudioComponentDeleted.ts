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
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.studioComponent.state;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a StudioComponent Deleted. Use this after invoking DeleteStudioComponent
 *  @deprecated Use waitUntilStudioComponentDeleted instead. waitForStudioComponentDeleted does not throw error in non-success cases.
 */
export const waitForStudioComponentDeleted = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStudioComponentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a StudioComponent Deleted. Use this after invoking DeleteStudioComponent
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStudioComponentCommand for polling.
 */
export const waitUntilStudioComponentDeleted = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStudioComponentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
