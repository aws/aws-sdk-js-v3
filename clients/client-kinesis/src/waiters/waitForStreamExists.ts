// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeStreamCommand, DescribeStreamCommandInput } from "../commands/DescribeStreamCommand";
import { KinesisClient } from "../KinesisClient";

const checkState = async (client: KinesisClient, input: DescribeStreamCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeStreamCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.StreamDescription.StreamStatus;
      };
      if (returnComparator() === "ACTIVE") {
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
 *  @deprecated Use waitUntilStreamExists instead. waitForStreamExists does not throw error in non-success cases.
 */
export const waitForStreamExists = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStreamCommand for polling.
 */
export const waitUntilStreamExists = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
