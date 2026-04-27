// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetOutboundExternalLinkCommandInput,
  type GetOutboundExternalLinkCommandOutput,
  GetOutboundExternalLinkCommand,
} from "../commands/GetOutboundExternalLinkCommand";
import type { RTBFabricServiceException } from "../models/RTBFabricServiceException";
import type { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetOutboundExternalLinkCommandInput): Promise<WaiterResult<GetOutboundExternalLinkCommandOutput | RTBFabricServiceException>> => {
  let reason;
  try {
    let result: GetOutboundExternalLinkCommandOutput & any = await client.send(new GetOutboundExternalLinkCommand(input));
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
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "REJECTED") {
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
 *  @deprecated Use waitUntilOutboundExternalLinkDeleted instead. waitForOutboundExternalLinkDeleted does not throw error in non-success cases.
 */
export const waitForOutboundExternalLinkDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetOutboundExternalLinkCommandInput
): Promise<WaiterResult<GetOutboundExternalLinkCommandOutput | RTBFabricServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetOutboundExternalLinkCommand for polling.
 */
export const waitUntilOutboundExternalLinkDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetOutboundExternalLinkCommandInput
): Promise<WaiterResult<GetOutboundExternalLinkCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetOutboundExternalLinkCommandOutput>;
};
