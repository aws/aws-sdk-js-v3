// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetPrivateGraphEndpointCommandInput,
  type GetPrivateGraphEndpointCommandOutput,
  GetPrivateGraphEndpointCommand,
} from "../commands/GetPrivateGraphEndpointCommand";
import type { NeptuneGraphServiceException } from "../models/NeptuneGraphServiceException";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetPrivateGraphEndpointCommandInput): Promise<WaiterResult<GetPrivateGraphEndpointCommandOutput | NeptuneGraphServiceException>> => {
  let reason;
  try {
    let result: GetPrivateGraphEndpointCommandOutput & any = await client.send(new GetPrivateGraphEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "AVAILABLE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until PrivateGraphEndpoint is Available
 *  @deprecated Use waitUntilPrivateGraphEndpointAvailable instead. waitForPrivateGraphEndpointAvailable does not throw error in non-success cases.
 */
export const waitForPrivateGraphEndpointAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetPrivateGraphEndpointCommandInput
): Promise<WaiterResult<GetPrivateGraphEndpointCommandOutput | NeptuneGraphServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until PrivateGraphEndpoint is Available
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPrivateGraphEndpointCommand for polling.
 */
export const waitUntilPrivateGraphEndpointAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetPrivateGraphEndpointCommandInput
): Promise<WaiterResult<GetPrivateGraphEndpointCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetPrivateGraphEndpointCommandOutput>;
};
