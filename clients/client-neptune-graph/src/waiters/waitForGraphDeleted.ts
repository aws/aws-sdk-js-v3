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
 * Wait until Graph is Deleted
 *  @deprecated Use waitUntilGraphDeleted instead. waitForGraphDeleted does not throw error in non-success cases.
 */
export const waitForGraphDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Graph is Deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphCommand for polling.
 */
export const waitUntilGraphDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
