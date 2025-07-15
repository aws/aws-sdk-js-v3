// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetChannelCommand, GetChannelCommandInput } from "../commands/GetChannelCommand";
import { RepostspaceClient } from "../RepostspaceClient";

const checkState = async (client: RepostspaceClient, input: GetChannelCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetChannelCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.channelStatus;
      };
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.channelStatus;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.channelStatus;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
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
 *
 *  @deprecated Use waitUntilChannelDeleted instead. waitForChannelDeleted does not throw error in non-success cases.
 */
export const waitForChannelDeleted = async (
  params: WaiterConfiguration<RepostspaceClient>,
  input: GetChannelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetChannelCommand for polling.
 */
export const waitUntilChannelDeleted = async (
  params: WaiterConfiguration<RepostspaceClient>,
  input: GetChannelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
