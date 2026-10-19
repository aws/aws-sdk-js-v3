// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetWebFunctionRevisionCommandInput,
  type GetWebFunctionRevisionCommandOutput,
  GetWebFunctionRevisionCommand,
} from "../commands/GetWebFunctionRevisionCommand";
import type { LambdaWebClient } from "../LambdaWebClient";
import type { LambdaWebServiceException } from "../models/LambdaWebServiceException";

const checkState = async (client: LambdaWebClient, input: GetWebFunctionRevisionCommandInput): Promise<WaiterResult<GetWebFunctionRevisionCommandOutput | LambdaWebServiceException>> => {
  let reason;
  try {
    let result: GetWebFunctionRevisionCommandOutput & any = await client.send(new GetWebFunctionRevisionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "Active") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "Pending") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits for the web function revision's state to be Active. This should be used after new revision creation.
 *  @deprecated Use waitUntilWebFunctionRevisionActive instead. waitForWebFunctionRevisionActive does not throw error in non-success cases.
 */
export const waitForWebFunctionRevisionActive = async (
  params: WaiterConfiguration<LambdaWebClient>,
  input: GetWebFunctionRevisionCommandInput
): Promise<WaiterResult<GetWebFunctionRevisionCommandOutput | LambdaWebServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits for the web function revision's state to be Active. This should be used after new revision creation.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetWebFunctionRevisionCommand for polling.
 */
export const waitUntilWebFunctionRevisionActive = async (
  params: WaiterConfiguration<LambdaWebClient>,
  input: GetWebFunctionRevisionCommandInput
): Promise<WaiterResult<GetWebFunctionRevisionCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetWebFunctionRevisionCommandOutput>;
};
