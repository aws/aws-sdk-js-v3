// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { AgentRegistryControlClient } from "../AgentRegistryControlClient";
import {
  type GetRegistryCommandInput,
  type GetRegistryCommandOutput,
  GetRegistryCommand,
} from "../commands/GetRegistryCommand";
import type { AgentRegistryControlServiceException } from "../models/AgentRegistryControlServiceException";

const checkState = async (client: AgentRegistryControlClient, input: GetRegistryCommandInput): Promise<WaiterResult<GetRegistryCommandOutput | AgentRegistryControlServiceException>> => {
  let reason;
  try {
    let result: GetRegistryCommandOutput & any = await client.send(new GetRegistryCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "READY") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
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
 *
 *  @deprecated Use waitUntilRegistryReady instead. waitForRegistryReady does not throw error in non-success cases.
 */
export const waitForRegistryReady = async (
  params: WaiterConfiguration<AgentRegistryControlClient>,
  input: GetRegistryCommandInput
): Promise<WaiterResult<GetRegistryCommandOutput | AgentRegistryControlServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRegistryCommand for polling.
 */
export const waitUntilRegistryReady = async (
  params: WaiterConfiguration<AgentRegistryControlClient>,
  input: GetRegistryCommandInput
): Promise<WaiterResult<GetRegistryCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRegistryCommandOutput>;
};
