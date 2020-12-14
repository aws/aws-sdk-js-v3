import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribeAssetCommand, DescribeAssetCommandInput } from "../commands/DescribeAssetCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: IoTSiteWiseClient, input: DescribeAssetCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAssetCommand(input));
    try {
      let returnComparator = () => {
        return result.assetStatus.state;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.assetStatus.state;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAssetCommand for polling.
 */
export const waitForAssetActive = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
