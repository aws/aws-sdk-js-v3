// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetRuntimeAliasCommandInput,
  type GetRuntimeAliasCommandOutput,
  GetRuntimeAliasCommand,
} from "../commands/GetRuntimeAliasCommand";
import type { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCoreServiceException } from "../models/LambdaCoreServiceException";

const checkState = async (client: LambdaCoreClient, input: GetRuntimeAliasCommandInput): Promise<WaiterResult<GetRuntimeAliasCommandOutput | LambdaCoreServiceException>> => {
  let reason;
  try {
    let result: GetRuntimeAliasCommandOutput & any = await client.send(new GetRuntimeAliasCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a runtime alias has finished provisioning/updating and reached the ACTIVE state.
 *  @deprecated Use waitUntilRuntimeAliasActive instead. waitForRuntimeAliasActive does not throw error in non-success cases.
 */
export const waitForRuntimeAliasActive = async (
  params: WaiterConfiguration<LambdaCoreClient>,
  input: GetRuntimeAliasCommandInput
): Promise<WaiterResult<GetRuntimeAliasCommandOutput | LambdaCoreServiceException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a runtime alias has finished provisioning/updating and reached the ACTIVE state.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRuntimeAliasCommand for polling.
 */
export const waitUntilRuntimeAliasActive = async (
  params: WaiterConfiguration<LambdaCoreClient>,
  input: GetRuntimeAliasCommandInput
): Promise<WaiterResult<GetRuntimeAliasCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetRuntimeAliasCommandOutput>;
};
