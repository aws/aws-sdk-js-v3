// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetWebFunctionCommandInput,
  type GetWebFunctionCommandOutput,
  GetWebFunctionCommand,
} from "../commands/GetWebFunctionCommand";
import type { LambdaWebClient } from "../LambdaWebClient";
import type { ResourceNotFoundException } from "../models/errors";
import type { LambdaWebServiceException } from "../models/LambdaWebServiceException";

const checkState = async (client: LambdaWebClient, input: GetWebFunctionCommandInput): Promise<WaiterResult<GetWebFunctionCommandOutput | LambdaWebServiceException>> => {
  let reason;
  try {
    let result: GetWebFunctionCommandOutput & any = await client.send(new GetWebFunctionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "Deleting") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits for the web function to be deleted. This should be used after function deletion.
 *  @deprecated Use waitUntilWebFunctionDeleted instead. waitForWebFunctionDeleted does not throw error in non-success cases.
 */
export const waitForWebFunctionDeleted = async (
  params: WaiterConfiguration<LambdaWebClient>,
  input: GetWebFunctionCommandInput
): Promise<WaiterResult<GetWebFunctionCommandOutput | LambdaWebServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits for the web function to be deleted. This should be used after function deletion.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetWebFunctionCommand for polling.
 */
export const waitUntilWebFunctionDeleted = async (
  params: WaiterConfiguration<LambdaWebClient>,
  input: GetWebFunctionCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
