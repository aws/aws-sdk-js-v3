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
        return (result.status != "DELETING");
      }
      if (returnComparator() == true) {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until GraphSnapshot is Deleted
 *  @deprecated Use waitUntilGraphSnapshotDeleted instead. waitForGraphSnapshotDeleted does not throw error in non-success cases.
 */
export const waitForGraphSnapshotDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until GraphSnapshot is Deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphSnapshotCommand for polling.
 */
export const waitUntilGraphSnapshotDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphSnapshotCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
