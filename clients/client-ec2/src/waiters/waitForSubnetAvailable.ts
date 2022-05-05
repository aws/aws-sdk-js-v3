// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeSubnetsCommand, DescribeSubnetsCommandInput } from "../commands/DescribeSubnetsCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeSubnetsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeSubnetsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Subnets);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
