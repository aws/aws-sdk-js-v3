// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { CloudWatchClient } from "../CloudWatchClient";
import { GetAlarmMuteRuleCommand, GetAlarmMuteRuleCommandInput } from "../commands/GetAlarmMuteRuleCommand";

const checkState = async (client: CloudWatchClient, input: GetAlarmMuteRuleCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetAlarmMuteRuleCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
