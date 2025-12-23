// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetClusterCommand, GetClusterCommandInput } from "../commands/GetClusterCommand";
import { DSQLClient } from "../DSQLClient";

const checkState = async (client: DSQLClient, input: GetClusterCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetClusterCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Cluster is ACTIVE
 *  @deprecated Use waitUntilClusterActive instead. waitForClusterActive does not throw error in non-success cases.
 */
export const waitForClusterActive = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Cluster is ACTIVE
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetClusterCommand for polling.
 */
export const waitUntilClusterActive = async (
  params: WaiterConfiguration<DSQLClient>,
  input: GetClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
