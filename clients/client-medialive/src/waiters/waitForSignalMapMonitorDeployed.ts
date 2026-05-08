// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetSignalMapCommandInput,
  type GetSignalMapCommandOutput,
  GetSignalMapCommand,
} from "../commands/GetSignalMapCommand";
import type { MediaLiveClient } from "../MediaLiveClient";
import type { MediaLiveServiceException } from "../models/MediaLiveServiceException";

const checkState = async (client: MediaLiveClient, input: GetSignalMapCommandInput): Promise<WaiterResult<GetSignalMapCommandOutput | MediaLiveServiceException>> => {
  let reason;
  try {
    let result: GetSignalMapCommandOutput & any = await client.send(new GetSignalMapCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DRY_RUN_DEPLOYMENT_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DEPLOYMENT_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DRY_RUN_DEPLOYMENT_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DEPLOYMENT_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.MonitorDeployment.Status;
      }
      if (returnComparator() === "DRY_RUN_DEPLOYMENT_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
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
): Promise<WaiterResult<GetSignalMapCommandOutput | MediaLiveServiceException>> => {
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
): Promise<WaiterResult<GetSignalMapCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetSignalMapCommandOutput>;
};
