// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetRuntimeVersionCommandInput,
  type GetRuntimeVersionCommandOutput,
  GetRuntimeVersionCommand,
} from "../commands/GetRuntimeVersionCommand";
import type { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCoreServiceException } from "../models/LambdaCoreServiceException";

const checkState = async (client: LambdaCoreClient, input: GetRuntimeVersionCommandInput): Promise<WaiterResult<GetRuntimeVersionCommandOutput | LambdaCoreServiceException>> => {
  let reason;
  try {
    let result: GetRuntimeVersionCommandOutput & any = await client.send(new GetRuntimeVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
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
 * Wait until a runtime version has finished provisioning and reached the ACTIVE state.
 *  @deprecated Use waitUntilRuntimeVersionActive instead. waitForRuntimeVersionActive does not throw error in non-success cases.
 */
export const waitForRuntimeVersionActive = async (
  params: WaiterConfiguration<LambdaCoreClient>,
  input: GetRuntimeVersionCommandInput
): Promise<WaiterResult<GetRuntimeVersionCommandOutput | LambdaCoreServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a runtime version has finished provisioning and reached the ACTIVE state.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRuntimeVersionCommand for polling.
 */
export const waitUntilRuntimeVersionActive = async (
  params: WaiterConfiguration<LambdaCoreClient>,
  input: GetRuntimeVersionCommandInput
): Promise<WaiterResult<GetRuntimeVersionCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRuntimeVersionCommandOutput>;
};
