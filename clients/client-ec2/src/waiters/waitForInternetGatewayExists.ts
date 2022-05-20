// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeInternetGatewaysCommand,
  DescribeInternetGatewaysCommandInput,
} from "../commands/DescribeInternetGatewaysCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeInternetGatewaysCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeInternetGatewaysCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.InternetGateways);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.InternetGatewayId;
        });
        return projection_3.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidInternetGateway.NotFound") {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
