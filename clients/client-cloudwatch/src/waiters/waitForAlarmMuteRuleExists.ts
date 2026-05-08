// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { CloudWatchClient } from "../CloudWatchClient";
import {
  type GetAlarmMuteRuleCommandInput,
  type GetAlarmMuteRuleCommandOutput,
  GetAlarmMuteRuleCommand,
} from "../commands/GetAlarmMuteRuleCommand";
import type { CloudWatchServiceException } from "../models/CloudWatchServiceException";

const checkState = async (client: CloudWatchClient, input: GetAlarmMuteRuleCommandInput): Promise<WaiterResult<GetAlarmMuteRuleCommandOutput | CloudWatchServiceException>> => {
  let reason;
  try {
    let result: GetAlarmMuteRuleCommandOutput & any = await client.send(new GetAlarmMuteRuleCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAlarmMuteRuleExists instead. waitForAlarmMuteRuleExists does not throw error in non-success cases.
 */
export const waitForAlarmMuteRuleExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: GetAlarmMuteRuleCommandInput
): Promise<WaiterResult<GetAlarmMuteRuleCommandOutput | CloudWatchServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAlarmMuteRuleCommand for polling.
 */
export const waitUntilAlarmMuteRuleExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: GetAlarmMuteRuleCommandInput
): Promise<WaiterResult<GetAlarmMuteRuleCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetAlarmMuteRuleCommandOutput>;
};
