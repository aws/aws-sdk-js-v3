// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetRequesterGatewayCommand, GetRequesterGatewayCommandInput } from "../commands/GetRequesterGatewayCommand";
import { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetRequesterGatewayCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetRequesterGatewayCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ERROR") {
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
 *  @deprecated Use waitUntilRequesterGatewayDeleted instead. waitForRequesterGatewayDeleted does not throw error in non-success cases.
 */
export const waitForRequesterGatewayDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetRequesterGatewayCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRequesterGatewayCommand for polling.
 */
export const waitUntilRequesterGatewayDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetRequesterGatewayCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
