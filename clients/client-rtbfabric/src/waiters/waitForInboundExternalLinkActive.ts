// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  GetInboundExternalLinkCommand,
  GetInboundExternalLinkCommandInput,
} from "../commands/GetInboundExternalLinkCommand";
import { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetInboundExternalLinkCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetInboundExternalLinkCommand(input));
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
      if (returnComparator() === "REJECTED") {
        return { state: WaiterState.FAILURE, reason };
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
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ISOLATED") {
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
 *  @deprecated Use waitUntilInboundExternalLinkActive instead. waitForInboundExternalLinkActive does not throw error in non-success cases.
 */
export const waitForInboundExternalLinkActive = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetInboundExternalLinkCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInboundExternalLinkCommand for polling.
 */
export const waitUntilInboundExternalLinkActive = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetInboundExternalLinkCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
