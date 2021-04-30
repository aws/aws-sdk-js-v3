import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribeAssetCommand, DescribeAssetCommandInput } from "../commands/DescribeAssetCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: IoTSiteWiseClient, input: DescribeAssetCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeAssetCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated in favor of waitUntilAssetNotExists. This does not throw on failure.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAssetCommand for polling.
 */
export const waitForAssetNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAssetCommand for polling.
 */
export const waitUntilAssetNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribeAssetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
