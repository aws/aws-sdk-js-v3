// smithy-typescript generated code
import { IoTClient } from "../IoTClient";
import {
  DescribeIndexCommand,
  DescribeIndexCommandInput,
} from "../commands/DescribeIndexCommand";
import {
  WaiterConfiguration,
  WaiterResult,
  WaiterState,
  checkExceptions,
  createWaiter,
} from "@smithy/util-waiter";

const checkState = async (client: IoTClient, input: DescribeIndexCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeIndexCommand(input))
    reason = result;
    try {
      let returnComparator = () => {
        return result.indexStatus;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  }
  catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
}
/**
 *
 *  @deprecated Use waitUntilIndexIsActive instead. waitForIndexIsActive does not throw error in non-success cases.
 */
export const waitForIndexIsActive = async (params: WaiterConfiguration<IoTClient>, input: DescribeIndexCommandInput): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({...serviceDefaults, ...params}, input, checkState);
}
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeIndexCommand for polling.
 */
export const waitUntilIndexIsActive = async (params: WaiterConfiguration<IoTClient>, input: DescribeIndexCommandInput): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({...serviceDefaults, ...params}, input, checkState);
  return checkExceptions(result);
}
