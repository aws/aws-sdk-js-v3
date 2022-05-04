// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CloudFrontClient } from "../CloudFrontClient";
import { GetInvalidationCommand, GetInvalidationCommandInput } from "../commands/GetInvalidationCommand";

const checkState = async (client: CloudFrontClient, input: GetInvalidationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetInvalidationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Invalidation.Status;
      };
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
