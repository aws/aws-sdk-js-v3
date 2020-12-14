import { GlacierClient } from "../GlacierClient";
import { DescribeVaultCommand, DescribeVaultCommandInput } from "../commands/DescribeVaultCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: GlacierClient, input: DescribeVaultCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeVaultCommand(input));
    return { state: WaiterState.RETRY };
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeVaultCommand for polling.
 */
export const waitForVaultNotExists = async (
  params: WaiterConfiguration<GlacierClient>,
  input: DescribeVaultCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
