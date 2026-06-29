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
  type DescribeAlarmsCommandInput,
  type DescribeAlarmsCommandOutput,
  DescribeAlarmsCommand,
} from "../commands/DescribeAlarmsCommand";
import type { CloudWatchServiceException } from "../models/CloudWatchServiceException";

const checkState = async (client: CloudWatchClient, input: DescribeAlarmsCommandInput): Promise<WaiterResult<DescribeAlarmsCommandOutput | CloudWatchServiceException>> => {
  let reason;
  try {
    let result: DescribeAlarmsCommandOutput & any = await client.send(new DescribeAlarmsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.LogAlarms);
        return (flat_1.length > 0);
      }
      if (returnComparator() == true) {
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
 *  @deprecated Use waitUntilLogAlarmExists instead. waitForLogAlarmExists does not throw error in non-success cases.
 */
export const waitForLogAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult<DescribeAlarmsCommandOutput | CloudWatchServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
export const waitUntilLogAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult<DescribeAlarmsCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeAlarmsCommandOutput>;
};
