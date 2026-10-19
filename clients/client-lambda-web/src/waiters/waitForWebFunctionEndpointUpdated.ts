// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetWebFunctionEndpointCommandInput,
  type GetWebFunctionEndpointCommandOutput,
  GetWebFunctionEndpointCommand,
} from "../commands/GetWebFunctionEndpointCommand";
import type { LambdaWebClient } from "../LambdaWebClient";
import type { LambdaWebServiceException } from "../models/LambdaWebServiceException";

const checkState = async (client: LambdaWebClient, input: GetWebFunctionEndpointCommandInput): Promise<WaiterResult<GetWebFunctionEndpointCommandOutput | LambdaWebServiceException>> => {
  let reason;
  try {
    let result: GetWebFunctionEndpointCommandOutput & any = await client.send(new GetWebFunctionEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.updateStatus;
      }
      if (returnComparator() === "Successful") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.updateStatus;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.updateStatus;
      }
      if (returnComparator() === "InProgress") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits for the web function endpoint's update status to be Successful. This should be used after endpoint updates.
 *  @deprecated Use waitUntilWebFunctionEndpointUpdated instead. waitForWebFunctionEndpointUpdated does not throw error in non-success cases.
 */
export const waitForWebFunctionEndpointUpdated = async (
  params: WaiterConfiguration<LambdaWebClient>,
  input: GetWebFunctionEndpointCommandInput
): Promise<WaiterResult<GetWebFunctionEndpointCommandOutput | LambdaWebServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits for the web function endpoint's update status to be Successful. This should be used after endpoint updates.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetWebFunctionEndpointCommand for polling.
 */
export const waitUntilWebFunctionEndpointUpdated = async (
  params: WaiterConfiguration<LambdaWebClient>,
  input: GetWebFunctionEndpointCommandInput
): Promise<WaiterResult<GetWebFunctionEndpointCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetWebFunctionEndpointCommandOutput>;
};
