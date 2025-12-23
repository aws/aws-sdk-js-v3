// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetGraphSnapshotCommand, GetGraphSnapshotCommandInput } from "../commands/GetGraphSnapshotCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetGraphSnapshotCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetGraphSnapshotCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "AVAILABLE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until GraphSnapshot is Available
 *  @deprecated Use waitUntilGraphSnapshotAvailable instead. waitForGraphSnapshotAvailable does not throw error in non-success cases.
 */
export const waitForGraphSnapshotAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 7200 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until GraphSnapshot is Available
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphSnapshotCommand for polling.
 */
export const waitUntilGraphSnapshotAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 7200 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
