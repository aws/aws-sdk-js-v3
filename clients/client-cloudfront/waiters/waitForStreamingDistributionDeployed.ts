import { CloudFrontClient } from "../CloudFrontClient";
import {
  GetStreamingDistributionCommand,
  GetStreamingDistributionCommandInput,
} from "../commands/GetStreamingDistributionCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: CloudFrontClient,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetStreamingDistributionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.StreamingDistribution.Status;
      };
      if (returnComparator() === "Deployed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a streaming distribution is deployed.
 *  @deprecated in favor of waitUntilStreamingDistributionDeployed. This does not throw on failure.
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetStreamingDistributionCommand for polling.
 */
export const waitForStreamingDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a streaming distribution is deployed.
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetStreamingDistributionCommand for polling.
 */
export const waitUntilStreamingDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
