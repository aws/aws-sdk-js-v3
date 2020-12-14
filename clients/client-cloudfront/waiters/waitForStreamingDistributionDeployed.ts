import { CloudFrontClient } from "../CloudFrontClient";
import {
  GetStreamingDistributionCommand,
  GetStreamingDistributionCommandInput,
} from "../commands/GetStreamingDistributionCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: CloudFrontClient,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetStreamingDistributionCommand(input));
    try {
      let returnComparator = () => {
        return result.StreamingDistribution.Status;
      };
      if (returnComparator() === "Deployed") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a streaming distribution is deployed.
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
