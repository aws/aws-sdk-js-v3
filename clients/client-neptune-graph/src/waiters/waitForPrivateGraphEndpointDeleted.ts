// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  GetPrivateGraphEndpointCommand,
  GetPrivateGraphEndpointCommandInput,
} from "../commands/GetPrivateGraphEndpointCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetPrivateGraphEndpointCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetPrivateGraphEndpointCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
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
 * Wait until PrivateGraphEndpoint is Deleted
 *  @deprecated Use waitUntilPrivateGraphEndpointDeleted instead. waitForPrivateGraphEndpointDeleted does not throw error in non-success cases.
 */
export const waitForPrivateGraphEndpointDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetPrivateGraphEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until PrivateGraphEndpoint is Deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPrivateGraphEndpointCommand for polling.
 */
export const waitUntilPrivateGraphEndpointDeleted = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetPrivateGraphEndpointCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
