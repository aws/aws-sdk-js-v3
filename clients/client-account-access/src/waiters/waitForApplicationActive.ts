// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { AccountAccessClient } from "../AccountAccessClient";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "../commands/GetApplicationCommand";
import type { AccountAccessServiceException } from "../models/AccountAccessServiceException";

const checkState = async (client: AccountAccessClient, input: GetApplicationCommandInput): Promise<WaiterResult<GetApplicationCommandOutput | AccountAccessServiceException>> => {
  let reason;
  try {
    let result: GetApplicationCommandOutput & any = await client.send(new GetApplicationCommand(input));
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
      if (returnComparator() === "DELETE_FAILED") {
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
 *  @deprecated Use waitUntilApplicationActive instead. waitForApplicationActive does not throw error in non-success cases.
 */
export const waitForApplicationActive = async (
  params: WaiterConfiguration<AccountAccessClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult<GetApplicationCommandOutput | AccountAccessServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetApplicationCommand for polling.
 */
export const waitUntilApplicationActive = async (
  params: WaiterConfiguration<AccountAccessClient>,
  input: GetApplicationCommandInput
): Promise<WaiterResult<GetApplicationCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetApplicationCommandOutput>;
};
