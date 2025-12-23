// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetGraphCommand, GetGraphCommandInput } from "../commands/GetGraphCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetGraphCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetGraphCommand(input));
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
 * Wait until Graph is Available
 *  @deprecated Use waitUntilGraphAvailable instead. waitForGraphAvailable does not throw error in non-success cases.
 */
export const waitForGraphAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Graph is Available
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphCommand for polling.
 */
export const waitUntilGraphAvailable = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
