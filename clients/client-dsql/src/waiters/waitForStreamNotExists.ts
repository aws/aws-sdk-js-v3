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
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: DSQLClient, input: GetStreamCommandInput): Promise<WaiterResult<GetStreamCommandOutput | DSQLServiceException>> => {
  let reason;
  try {
    let result: GetStreamCommandOutput & any = await client.send(new GetStreamCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Stream is gone
 *  @deprecated Use waitUntilStreamNotExists instead. waitForStreamNotExists does not throw error in non-success cases.
 */
export const waitForStreamNotExists = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetStreamCommandInput
): Promise<WaiterResult<GetStreamCommandOutput | DSQLServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Stream is gone
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamCommand for polling.
 */
export const waitUntilStreamNotExists = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetStreamCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
