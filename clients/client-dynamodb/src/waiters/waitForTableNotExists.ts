import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeTableCommand, DescribeTableCommandInput } from "../commands/DescribeTableCommand";
import { DynamoDBClient } from "../DynamoDBClient";

const checkState = async (client: DynamoDBClient, input: DescribeTableCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeTableCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilTableNotExists instead. waitForTableNotExists does not throw error in non-success cases.
 */
export const waitForTableNotExists = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeTableCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTableCommand for polling.
 */
export const waitUntilTableNotExists = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeTableCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
