// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetLaunchProfileCommand, GetLaunchProfileCommandInput } from "../commands/GetLaunchProfileCommand";
import { NimbleClient } from "../NimbleClient";

const checkState = async (client: NimbleClient, input: GetLaunchProfileCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetLaunchProfileCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.launchProfile.state;
      };
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.launchProfile.state;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.launchProfile.state;
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
 * Wait until a LaunchProfile is Ready. Use this after invoking CreateLaunchProfile or UpdateLaunchProfile
 *  @deprecated Use waitUntilLaunchProfileReady instead. waitForLaunchProfileReady does not throw error in non-success cases.
 */
export const waitForLaunchProfileReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetLaunchProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 750 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a LaunchProfile is Ready. Use this after invoking CreateLaunchProfile or UpdateLaunchProfile
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLaunchProfileCommand for polling.
 */
export const waitUntilLaunchProfileReady = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetLaunchProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 750 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
