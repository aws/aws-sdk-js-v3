// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetResponderGatewayCommandInput,
  type GetResponderGatewayCommandOutput,
  GetResponderGatewayCommand,
} from "../commands/GetResponderGatewayCommand";
import type { ResourceNotFoundException } from "../models/errors";
import type { RTBFabricServiceException } from "../models/RTBFabricServiceException";
import type { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetResponderGatewayCommandInput): Promise<WaiterResult<GetResponderGatewayCommandOutput | RTBFabricServiceException>> => {
  let reason;
  try {
    let result: GetResponderGatewayCommandOutput & any = await client.send(new GetResponderGatewayCommand(input));
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
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilResponderGatewayDeleted instead. waitForResponderGatewayDeleted does not throw error in non-success cases.
 */
export const waitForResponderGatewayDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetResponderGatewayCommandInput
): Promise<WaiterResult<GetResponderGatewayCommandOutput | RTBFabricServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetResponderGatewayCommand for polling.
 */
export const waitUntilResponderGatewayDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetResponderGatewayCommandInput
): Promise<WaiterResult<GetResponderGatewayCommandOutput | ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetResponderGatewayCommandOutput | ResourceNotFoundException>;
};
