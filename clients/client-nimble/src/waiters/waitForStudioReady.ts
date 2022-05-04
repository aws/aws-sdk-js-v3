// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetStudioCommand, GetStudioCommandInput } from "../commands/GetStudioCommand";
import { NimbleClient } from "../NimbleClient";

const checkState = async (client: NimbleClient, input: GetStudioCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetStudioCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.studio.state;
      };
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.studio.state;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.studio.state;
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
 * Wait until a Studio is Ready. Use this after invoking CreateStudio, UpdateStudio, or StartStudioSSOConfigurationRepair
 *  @deprecated Use waitUntilStudioReady instead. waitForStudioReady does not throw error in non-success cases.
 */
export const waitForStudioReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStudioCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Studio is Ready. Use this after invoking CreateStudio, UpdateStudio, or StartStudioSSOConfigurationRepair
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStudioCommand for polling.
 */
export const waitUntilStudioReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetStudioCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
