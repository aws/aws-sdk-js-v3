// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeServerCommand, DescribeServerCommandInput } from "../commands/DescribeServerCommand";
import { TransferClient } from "../TransferClient";

const checkState = async (client: TransferClient, input: DescribeServerCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeServerCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Server.State;
      };
      if (returnComparator() === "ONLINE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Server.State;
      };
      if (returnComparator() === "START_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilServerOnline instead. waitForServerOnline does not throw error in non-success cases.
 */
export const waitForServerOnline = async (
  params: WaiterConfiguration<TransferClient>,
  input: DescribeServerCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeServerCommand for polling.
 */
export const waitUntilServerOnline = async (
  params: WaiterConfiguration<TransferClient>,
  input: DescribeServerCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
