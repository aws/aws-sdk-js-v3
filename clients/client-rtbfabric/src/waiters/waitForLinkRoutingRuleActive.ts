// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetLinkRoutingRuleCommandInput,
  type GetLinkRoutingRuleCommandOutput,
  GetLinkRoutingRuleCommand,
} from "../commands/GetLinkRoutingRuleCommand";
import type { RTBFabricServiceException } from "../models/RTBFabricServiceException";
import type { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetLinkRoutingRuleCommandInput): Promise<WaiterResult<GetLinkRoutingRuleCommandOutput | RTBFabricServiceException>> => {
  let reason;
  try {
    let result: GetLinkRoutingRuleCommandOutput & any = await client.send(new GetLinkRoutingRuleCommand(input));
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
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilLinkRoutingRuleActive instead. waitForLinkRoutingRuleActive does not throw error in non-success cases.
 */
export const waitForLinkRoutingRuleActive = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetLinkRoutingRuleCommandInput
): Promise<WaiterResult<GetLinkRoutingRuleCommandOutput | RTBFabricServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLinkRoutingRuleCommand for polling.
 */
export const waitUntilLinkRoutingRuleActive = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetLinkRoutingRuleCommandInput
): Promise<WaiterResult<GetLinkRoutingRuleCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetLinkRoutingRuleCommandOutput>;
};
