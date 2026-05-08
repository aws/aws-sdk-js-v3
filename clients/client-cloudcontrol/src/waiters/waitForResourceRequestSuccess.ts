// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { CloudControlClient } from "../CloudControlClient";
import {
  type GetResourceRequestStatusCommandInput,
  type GetResourceRequestStatusCommandOutput,
  GetResourceRequestStatusCommand,
} from "../commands/GetResourceRequestStatusCommand";
import type { CloudControlServiceException } from "../models/CloudControlServiceException";

const checkState = async (client: CloudControlClient, input: GetResourceRequestStatusCommandInput): Promise<WaiterResult<GetResourceRequestStatusCommandOutput | CloudControlServiceException>> => {
  let reason;
  try {
    let result: GetResourceRequestStatusCommandOutput & any = await client.send(new GetResourceRequestStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ProgressEvent.OperationStatus;
      }
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProgressEvent.OperationStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ProgressEvent.OperationStatus;
      }
      if (returnComparator() === "CANCEL_COMPLETE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until resource operation request is successful
 *  @deprecated Use waitUntilResourceRequestSuccess instead. waitForResourceRequestSuccess does not throw error in non-success cases.
 */
export const waitForResourceRequestSuccess = async (
  params: WaiterConfiguration<CloudControlClient>,
  input: GetResourceRequestStatusCommandInput
): Promise<WaiterResult<GetResourceRequestStatusCommandOutput | CloudControlServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until resource operation request is successful
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetResourceRequestStatusCommand for polling.
 */
export const waitUntilResourceRequestSuccess = async (
  params: WaiterConfiguration<CloudControlClient>,
  input: GetResourceRequestStatusCommandInput
): Promise<WaiterResult<GetResourceRequestStatusCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetResourceRequestStatusCommandOutput>;
};
