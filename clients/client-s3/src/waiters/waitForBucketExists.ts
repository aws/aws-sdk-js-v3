// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { HeadBucketCommand, HeadBucketCommandInput } from "../commands/HeadBucketCommand";
import { S3Client } from "../S3Client";

const checkState = async (client: S3Client, input: HeadBucketCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new HeadBucketCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilBucketExists instead. waitForBucketExists does not throw error in non-success cases.
 */
export const waitForBucketExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadBucketCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadBucketCommand for polling.
 */
export const waitUntilBucketExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadBucketCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
