import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { DescribePortalCommand, DescribePortalCommandInput } from "../commands/DescribePortalCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: IoTSiteWiseClient, input: DescribePortalCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribePortalCommand(input));
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
 *  @deprecated Use waitUntilPortalNotExists instead. waitForPortalNotExists does not throw error in non-success cases.
 */
export const waitForPortalNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribePortalCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribePortalCommand for polling.
 */
export const waitUntilPortalNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribePortalCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
