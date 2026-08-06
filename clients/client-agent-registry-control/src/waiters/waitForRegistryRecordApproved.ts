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
  type GetRegistryRecordCommandInput,
  type GetRegistryRecordCommandOutput,
  GetRegistryRecordCommand,
} from "../commands/GetRegistryRecordCommand";
import type { AgentRegistryControlServiceException } from "../models/AgentRegistryControlServiceException";

const checkState = async (client: AgentRegistryControlClient, input: GetRegistryRecordCommandInput): Promise<WaiterResult<GetRegistryRecordCommandOutput | AgentRegistryControlServiceException>> => {
  let reason;
  try {
    let result: GetRegistryRecordCommandOutput & any = await client.send(new GetRegistryRecordCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "APPROVED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "REJECTED") {
        return { state: WaiterState.FAILURE, reason };
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
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilRegistryRecordApproved instead. waitForRegistryRecordApproved does not throw error in non-success cases.
 */
export const waitForRegistryRecordApproved = async (
  params: WaiterConfiguration<AgentRegistryControlClient>,
  input: GetRegistryRecordCommandInput
): Promise<WaiterResult<GetRegistryRecordCommandOutput | AgentRegistryControlServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRegistryRecordCommand for polling.
 */
export const waitUntilRegistryRecordApproved = async (
  params: WaiterConfiguration<AgentRegistryControlClient>,
  input: GetRegistryRecordCommandInput
): Promise<WaiterResult<GetRegistryRecordCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRegistryRecordCommandOutput>;
};
