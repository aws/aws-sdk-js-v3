// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeTableCommandInput,
  type DescribeTableCommandOutput,
  DescribeTableCommand,
} from "../commands/DescribeTableCommand";
import type { DynamoDBClient } from "../DynamoDBClient";
import type { DynamoDBServiceException } from "../models/DynamoDBServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: DynamoDBClient, input: DescribeTableCommandInput): Promise<WaiterResult<DescribeTableCommandOutput | DynamoDBServiceException>> => {
  let reason;
  try {
    let result: DescribeTableCommandOutput & any = await client.send(new DescribeTableCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
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
): Promise<WaiterResult<DescribeTableCommandOutput | DynamoDBServiceException>> => {
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
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
