import { CloudFrontClient } from "../CloudFrontClient";
import { GetDistributionCommand, GetDistributionCommandInput } from "../commands/GetDistributionCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: CloudFrontClient, input: GetDistributionCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetDistributionCommand(input));
    try {
      let returnComparator = () => {
        return result.Distribution.Status;
      };
      if (returnComparator() === "Deployed") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a distribution is deployed.
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetDistributionCommand for polling.
 */
export const waitForDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
