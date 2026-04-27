// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type GetInboundExternalLinkCommandInput,
  type GetInboundExternalLinkCommandOutput,
  GetInboundExternalLinkCommand,
} from "../commands/GetInboundExternalLinkCommand";
import type { RTBFabricServiceException } from "../models/RTBFabricServiceException";
import type { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetInboundExternalLinkCommandInput): Promise<WaiterResult<GetInboundExternalLinkCommandOutput | RTBFabricServiceException>> => {
  let reason;
  try {
    let result: GetInboundExternalLinkCommandOutput & any = await client.send(new GetInboundExternalLinkCommand(input));
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
 *  @deprecated Use waitUntilInboundExternalLinkDeleted instead. waitForInboundExternalLinkDeleted does not throw error in non-success cases.
 */
export const waitForInboundExternalLinkDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetInboundExternalLinkCommandInput
): Promise<WaiterResult<GetInboundExternalLinkCommandOutput | RTBFabricServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInboundExternalLinkCommand for polling.
 */
export const waitUntilInboundExternalLinkDeleted = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetInboundExternalLinkCommandInput
): Promise<WaiterResult<GetInboundExternalLinkCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetInboundExternalLinkCommandOutput>;
};
