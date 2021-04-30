import { CloudFrontClient } from "../CloudFrontClient";
import { GetInvalidationCommand, GetInvalidationCommandInput } from "../commands/GetInvalidationCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: CloudFrontClient, input: GetInvalidationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetInvalidationCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
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
 *  @deprecated in favor of waitUntilInvalidationCompleted. This does not throw on failure.
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetInvalidationCommand for polling.
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
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetInvalidationCommand for polling.
 */
export const waitUntilInvalidationCompleted = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetInvalidationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
