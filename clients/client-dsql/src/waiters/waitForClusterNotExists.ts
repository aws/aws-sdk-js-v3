// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetClusterCommand, GetClusterCommandInput } from "../commands/GetClusterCommand";
import { DSQLClient } from "../DSQLClient";

const checkState = async (client: DSQLClient, input: GetClusterCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetClusterCommand(input));
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
 * Wait until a Cluster is gone
 *  @deprecated Use waitUntilClusterNotExists instead. waitForClusterNotExists does not throw error in non-success cases.
 */
export const waitForClusterNotExists = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Cluster is gone
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetClusterCommand for polling.
 */
export const waitUntilClusterNotExists = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
