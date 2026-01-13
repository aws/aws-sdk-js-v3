// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetGraphCommand, GetGraphCommandInput } from "../commands/GetGraphCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetGraphCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetGraphCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "STOPPED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return (result.status != "STOPPING");
      }
      if (returnComparator() == true) {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until Graph is Stopped
 *  @deprecated Use waitUntilGraphStopped instead. waitForGraphStopped does not throw error in non-success cases.
 */
export const waitForGraphStopped = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Graph is Stopped
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphCommand for polling.
 */
export const waitUntilGraphStopped = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
