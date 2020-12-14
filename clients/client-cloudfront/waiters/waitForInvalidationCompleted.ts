import { CloudFrontClient } from "../CloudFrontClient";
import { GetInvalidationCommand, GetInvalidationCommandInput } from "../commands/GetInvalidationCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: CloudFrontClient, input: GetInvalidationCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetInvalidationCommand(input));
    try {
      let returnComparator = () => {
        return result.Invalidation.Status;
      };
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until an invalidation has completed.
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
