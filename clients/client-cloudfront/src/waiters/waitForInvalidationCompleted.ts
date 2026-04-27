// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { CloudFrontClient } from "../CloudFrontClient";
import {
  type GetInvalidationCommandInput,
  type GetInvalidationCommandOutput,
  GetInvalidationCommand,
} from "../commands/GetInvalidationCommand";
import type { CloudFrontServiceException } from "../models/CloudFrontServiceException";

const checkState = async (client: CloudFrontClient, input: GetInvalidationCommandInput): Promise<WaiterResult<GetInvalidationCommandOutput | CloudFrontServiceException>> => {
  let reason;
  try {
    let result: GetInvalidationCommandOutput & any = await client.send(new GetInvalidationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Invalidation.Status;
      }
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an invalidation has completed.
 *  @deprecated Use waitUntilInvalidationCompleted instead. waitForInvalidationCompleted does not throw error in non-success cases.
 */
export const waitForInvalidationCompleted = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetInvalidationCommandInput
): Promise<WaiterResult<GetInvalidationCommandOutput | CloudFrontServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an invalidation has completed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInvalidationCommand for polling.
 */
export const waitUntilInvalidationCompleted = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetInvalidationCommandInput
): Promise<WaiterResult<GetInvalidationCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetInvalidationCommandOutput>;
};
