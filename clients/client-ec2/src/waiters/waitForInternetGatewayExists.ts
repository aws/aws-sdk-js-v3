// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeInternetGatewaysCommandInput,
  type DescribeInternetGatewaysCommandOutput,
  DescribeInternetGatewaysCommand,
} from "../commands/DescribeInternetGatewaysCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeInternetGatewaysCommandInput): Promise<WaiterResult<DescribeInternetGatewaysCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeInternetGatewaysCommandOutput & any = await client.send(new DescribeInternetGatewaysCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.InternetGateways);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.InternetGatewayId;
        });
        return (projection_3.length > 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InvalidInternetGateway.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInternetGatewayExists instead. waitForInternetGatewayExists does not throw error in non-success cases.
 */
export const waitForInternetGatewayExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInternetGatewaysCommandInput
): Promise<WaiterResult<DescribeInternetGatewaysCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInternetGatewaysCommand for polling.
 */
export const waitUntilInternetGatewayExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInternetGatewaysCommandInput
): Promise<WaiterResult<DescribeInternetGatewaysCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeInternetGatewaysCommandOutput>;
};
