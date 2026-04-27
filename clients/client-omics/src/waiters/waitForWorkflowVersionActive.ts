// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetWorkflowVersionCommandInput,
  type GetWorkflowVersionCommandOutput,
  GetWorkflowVersionCommand,
} from "../commands/GetWorkflowVersionCommand";
import type { OmicsServiceException } from "../models/OmicsServiceException";
import type { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetWorkflowVersionCommandInput): Promise<WaiterResult<GetWorkflowVersionCommandOutput | OmicsServiceException>> => {
  let reason;
  try {
    let result: GetWorkflowVersionCommandOutput & any = await client.send(new GetWorkflowVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
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
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a workflow version is active.
 *  @deprecated Use waitUntilWorkflowVersionActive instead. waitForWorkflowVersionActive does not throw error in non-success cases.
 */
export const waitForWorkflowVersionActive = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetWorkflowVersionCommandInput
): Promise<WaiterResult<GetWorkflowVersionCommandOutput | OmicsServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 30 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a workflow version is active.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetWorkflowVersionCommand for polling.
 */
export const waitUntilWorkflowVersionActive = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetWorkflowVersionCommandInput
): Promise<WaiterResult<GetWorkflowVersionCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 30 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetWorkflowVersionCommandOutput>;
};
