// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { CloudWatchClient } from "../CloudWatchClient";
import { type DescribeAlarmsCommandInput, DescribeAlarmsCommand } from "../commands/DescribeAlarmsCommand";

const checkState = async (client: CloudWatchClient, input: DescribeAlarmsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeAlarmsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.MetricAlarms);
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
 *  @deprecated Use waitUntilAlarmExists instead. waitForAlarmExists does not throw error in non-success cases.
 */
export const waitForAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
export const waitUntilAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
