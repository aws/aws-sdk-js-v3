// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetFleetCommandInput, type GetFleetCommandOutput, GetFleetCommand } from "../commands/GetFleetCommand";
import type { DeadlineClient } from "../DeadlineClient";
import type { DeadlineServiceException } from "../models/DeadlineServiceException";

const checkState = async (client: DeadlineClient, input: GetFleetCommandInput): Promise<WaiterResult<GetFleetCommandOutput | DeadlineServiceException>> => {
  let reason;
  try {
    let result: GetFleetCommandOutput & any = await client.send(new GetFleetCommand(input));
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
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "UPDATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet.
 *  @deprecated Use waitUntilFleetActive instead. waitForFleetActive does not throw error in non-success cases.
 */
export const waitForFleetActive = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetFleetCommandInput
): Promise<WaiterResult<GetFleetCommandOutput | DeadlineServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFleetCommand for polling.
 */
export const waitUntilFleetActive = async (
  params: WaiterConfiguration<DeadlineClient>,
  input: GetFleetCommandInput
): Promise<WaiterResult<GetFleetCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetFleetCommandOutput>;
};
