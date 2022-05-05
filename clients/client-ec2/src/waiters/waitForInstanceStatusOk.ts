// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeInstanceStatusCommand,
  DescribeInstanceStatusCommandInput,
} from "../commands/DescribeInstanceStatusCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeInstanceStatusCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeInstanceStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.InstanceStatuses);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.InstanceStatus.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "ok";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidInstanceID.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceStatusOk instead. waitForInstanceStatusOk does not throw error in non-success cases.
 */
export const waitForInstanceStatusOk = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstanceStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceStatusCommand for polling.
 */
export const waitUntilInstanceStatusOk = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstanceStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
