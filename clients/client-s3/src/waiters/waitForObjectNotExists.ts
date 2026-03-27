// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type HeadObjectCommandInput, HeadObjectCommand } from "../commands/HeadObjectCommand";
import type { S3Client } from "../S3Client";

const checkState = async (client: S3Client, input: HeadObjectCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new HeadObjectCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NotFound") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilObjectNotExists instead. waitForObjectNotExists does not throw error in non-success cases.
 */
export const waitForObjectNotExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadObjectCommand for polling.
 */
export const waitUntilObjectNotExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
