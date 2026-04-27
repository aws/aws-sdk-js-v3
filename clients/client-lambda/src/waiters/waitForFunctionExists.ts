// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetFunctionCommand,
} from "../commands/GetFunctionCommand";
import type { LambdaClient } from "../LambdaClient";
import type { LambdaServiceException } from "../models/LambdaServiceException";

const checkState = async (client: LambdaClient, input: GetFunctionCommandInput): Promise<WaiterResult<GetFunctionCommandOutput | LambdaServiceException>> => {
  let reason;
  try {
    let result: GetFunctionCommandOutput & any = await client.send(new GetFunctionCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilFunctionExists instead. waitForFunctionExists does not throw error in non-success cases.
 */
export const waitForFunctionExists = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult<GetFunctionCommandOutput | LambdaServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 20 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionCommand for polling.
 */
export const waitUntilFunctionExists = async (
  params: WaiterConfiguration<LambdaClient>,
  input: GetFunctionCommandInput
): Promise<WaiterResult<GetFunctionCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 20 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetFunctionCommandOutput>;
};
