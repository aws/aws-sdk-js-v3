// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetStreamCommandInput,
  type GetStreamCommandOutput,
  GetStreamCommand,
} from "../commands/GetStreamCommand";
import type { DSQLClient } from "../DSQLClient";
import type { DSQLServiceException } from "../models/DSQLServiceException";

const checkState = async (client: DSQLClient, input: GetStreamCommandInput): Promise<WaiterResult<GetStreamCommandOutput | DSQLServiceException>> => {
  let reason;
  try {
    let result: GetStreamCommandOutput & any = await client.send(new GetStreamCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Stream is ACTIVE
 *  @deprecated Use waitUntilStreamActive instead. waitForStreamActive does not throw error in non-success cases.
 */
export const waitForStreamActive = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetStreamCommandInput
): Promise<WaiterResult<GetStreamCommandOutput | DSQLServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Stream is ACTIVE
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamCommand for polling.
 */
export const waitUntilStreamActive = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetStreamCommandInput
): Promise<WaiterResult<GetStreamCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetStreamCommandOutput>;
};
