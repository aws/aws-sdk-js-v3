// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeKeyPairsCommandInput,
  type DescribeKeyPairsCommandOutput,
  DescribeKeyPairsCommand,
} from "../commands/DescribeKeyPairsCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeKeyPairsCommandInput): Promise<WaiterResult<DescribeKeyPairsCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeKeyPairsCommandOutput & any = await client.send(new DescribeKeyPairsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.KeyPairs);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.KeyName;
        });
        return (projection_3.length > 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InvalidKeyPair.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilKeyPairExists instead. waitForKeyPairExists does not throw error in non-success cases.
 */
export const waitForKeyPairExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeKeyPairsCommandInput
): Promise<WaiterResult<DescribeKeyPairsCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeKeyPairsCommand for polling.
 */
export const waitUntilKeyPairExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeKeyPairsCommandInput
): Promise<WaiterResult<DescribeKeyPairsCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeKeyPairsCommandOutput>;
};
