// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeVaultCommand, DescribeVaultCommandInput } from "../commands/DescribeVaultCommand";
import { GlacierClient } from "../GlacierClient";

const checkState = async (client: GlacierClient, input: DescribeVaultCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeVaultCommand(input));
    reason = result;
    return { state: WaiterState.RETRY, reason };
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
 *  @deprecated Use waitUntilVaultNotExists instead. waitForVaultNotExists does not throw error in non-success cases.
 */
export const waitForVaultNotExists = async (
  params: WaiterConfiguration<GlacierClient>,
  input: DescribeVaultCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVaultCommand for polling.
 */
export const waitUntilVaultNotExists = async (
  params: WaiterConfiguration<GlacierClient>,
  input: DescribeVaultCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
