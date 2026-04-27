// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionCommand,
} from "../commands/GetConnectionCommand";
import type { InterconnectClient } from "../InterconnectClient";
import type { InterconnectServiceException } from "../models/InterconnectServiceException";

const checkState = async (client: InterconnectClient, input: GetConnectionCommandInput): Promise<WaiterResult<GetConnectionCommandOutput | InterconnectServiceException>> => {
  let reason;
  try {
    let result: GetConnectionCommandOutput & any = await client.send(new GetConnectionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.connection.state;
      }
      if (returnComparator() === "deleted") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilConnectionDeleted instead. waitForConnectionDeleted does not throw error in non-success cases.
 */
export const waitForConnectionDeleted = async (
  params: WaiterConfiguration<InterconnectClient>,
  input: GetConnectionCommandInput
): Promise<WaiterResult<GetConnectionCommandOutput | InterconnectServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetConnectionCommand for polling.
 */
export const waitUntilConnectionDeleted = async (
  params: WaiterConfiguration<InterconnectClient>,
  input: GetConnectionCommandInput
): Promise<WaiterResult<GetConnectionCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetConnectionCommandOutput>;
};
