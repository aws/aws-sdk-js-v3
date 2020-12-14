import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribeAssetModelCommand, DescribeAssetModelCommandInput } from "../commands/DescribeAssetModelCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: IoTSiteWiseClient, input: DescribeAssetModelCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAssetModelCommand(input));
    try {
      let returnComparator = () => {
        return result.assetModelStatus.state;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.assetModelStatus.state;
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
 *  @param input : the input to DescribeAssetModelCommand for polling.
 */
export const waitForAssetModelActive = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetModelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
