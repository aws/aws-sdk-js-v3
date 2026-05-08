// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type HeadObjectCommandInput,
  type HeadObjectCommandOutput,
  HeadObjectCommand,
} from "../commands/HeadObjectCommand";
import type { S3ServiceException } from "../models/S3ServiceException";
import type { S3Client } from "../S3Client";

const checkState = async (client: S3Client, input: HeadObjectCommandInput): Promise<WaiterResult<HeadObjectCommandOutput | S3ServiceException>> => {
  let reason;
  try {
    let result: HeadObjectCommandOutput & any = await client.send(new HeadObjectCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name === "NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilObjectExists instead. waitForObjectExists does not throw error in non-success cases.
 */
export const waitForObjectExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
): Promise<WaiterResult<HeadObjectCommandOutput | S3ServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadObjectCommand for polling.
 */
export const waitUntilObjectExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
): Promise<WaiterResult<HeadObjectCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<HeadObjectCommandOutput>;
};
