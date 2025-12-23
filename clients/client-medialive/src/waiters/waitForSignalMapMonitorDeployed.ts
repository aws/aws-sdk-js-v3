// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetSignalMapCommand, GetSignalMapCommandInput } from "../commands/GetSignalMapCommand";
import { MediaLiveClient } from "../MediaLiveClient";

const checkState = async (client: MediaLiveClient, input: GetSignalMapCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetSignalMapCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DRY_RUN_DEPLOYMENT_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DEPLOYMENT_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DRY_RUN_DEPLOYMENT_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DEPLOYMENT_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DRY_RUN_DEPLOYMENT_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DEPLOYMENT_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a signal map's monitor has been deployed
 *  @deprecated Use waitUntilSignalMapMonitorDeployed instead. waitForSignalMapMonitorDeployed does not throw error in non-success cases.
 */
export const waitForSignalMapMonitorDeployed = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: GetSignalMapCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a signal map's monitor has been deployed
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetSignalMapCommand for polling.
 */
export const waitUntilSignalMapMonitorDeployed = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: GetSignalMapCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
