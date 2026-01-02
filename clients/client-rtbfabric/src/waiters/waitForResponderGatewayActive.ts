// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetResponderGatewayCommand, GetResponderGatewayCommandInput } from "../commands/GetResponderGatewayCommand";
import { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetResponderGatewayCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetResponderGatewayCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.FAILURE, reason };
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
 *  @deprecated Use waitUntilResponderGatewayActive instead. waitForResponderGatewayActive does not throw error in non-success cases.
 */
export const waitForResponderGatewayActive = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetResponderGatewayCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetResponderGatewayCommand for polling.
 */
export const waitUntilResponderGatewayActive = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetResponderGatewayCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
