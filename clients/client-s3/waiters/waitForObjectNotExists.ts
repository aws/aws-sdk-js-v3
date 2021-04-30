import { S3Client } from "../S3Client";
import { HeadObjectCommand, HeadObjectCommandInput } from "../commands/HeadObjectCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

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
 *  @deprecated in favor of waitUntilObjectNotExists. This does not throw on failure.
 *  @param params : Waiter configuration options.
 *  @param input : the input to HeadObjectCommand for polling.
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
 *  @param params : Waiter configuration options.
 *  @param input : the input to HeadObjectCommand for polling.
 */
export const waitUntilObjectNotExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadObjectCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
