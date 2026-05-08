// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeSubnetsCommandInput,
  type DescribeSubnetsCommandOutput,
  DescribeSubnetsCommand,
} from "../commands/DescribeSubnetsCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeSubnetsCommandInput): Promise<WaiterResult<DescribeSubnetsCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeSubnetsCommandOutput & any = await client.send(new DescribeSubnetsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Subnets);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "available")
      }
      if (allStringEq_5) {
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
 *  @deprecated Use waitUntilSubnetAvailable instead. waitForSubnetAvailable does not throw error in non-success cases.
 */
export const waitForSubnetAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSubnetsCommandInput
): Promise<WaiterResult<DescribeSubnetsCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSubnetsCommand for polling.
 */
export const waitUntilSubnetAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSubnetsCommandInput
): Promise<WaiterResult<DescribeSubnetsCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeSubnetsCommandOutput>;
};
