import { S3Client } from "../S3Client";
import { HeadBucketCommand, HeadBucketCommandInput } from "../commands/HeadBucketCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: S3Client, input: HeadBucketCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new HeadBucketCommand(input));
  } catch (exception) {
    if (exception.name && exception.name == "NotFound") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to HeadBucketCommand for polling.
 */
export const waitForBucketNotExists = async (
  params: WaiterConfiguration<S3Client>,
  input: HeadBucketCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
