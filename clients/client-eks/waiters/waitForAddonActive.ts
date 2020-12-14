import { EKSClient } from "../EKSClient";
import { DescribeAddonCommand, DescribeAddonCommandInput } from "../commands/DescribeAddonCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EKSClient, input: DescribeAddonCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAddonCommand(input));
    try {
      let returnComparator = () => {
        return result.addon.status;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.addon.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAddonCommand for polling.
 */
export const waitForAddonActive = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeAddonCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
