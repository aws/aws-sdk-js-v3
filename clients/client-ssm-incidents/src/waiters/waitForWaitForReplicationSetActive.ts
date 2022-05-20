// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetReplicationSetCommand, GetReplicationSetCommandInput } from "../commands/GetReplicationSetCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";

const checkState = async (client: SSMIncidentsClient, input: GetReplicationSetCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetReplicationSetCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.replicationSet.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.replicationSet.status;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.replicationSet.status;
      };
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.replicationSet.status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait for a replication set to become ACTIVE
 *  @deprecated Use waitUntilWaitForReplicationSetActive instead. waitForWaitForReplicationSetActive does not throw error in non-success cases.
 */
export const waitForWaitForReplicationSetActive = async (
  params: WaiterConfiguration<SSMIncidentsClient>,
  input: GetReplicationSetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 30 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait for a replication set to become ACTIVE
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetReplicationSetCommand for polling.
 */
export const waitUntilWaitForReplicationSetActive = async (
  params: WaiterConfiguration<SSMIncidentsClient>,
  input: GetReplicationSetCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 30 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
