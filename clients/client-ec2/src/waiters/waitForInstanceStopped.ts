// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeInstancesCommand, DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeInstancesCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeInstancesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Reservations);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        const flat_4: any[] = [].concat(...projection_3);
        const projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      let allStringEq_8 = returnComparator().length > 0;
      for (const element_7 of returnComparator()) {
        allStringEq_8 = allStringEq_8 && element_7 == "stopped";
      }
      if (allStringEq_8) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Reservations);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        const flat_4: any[] = [].concat(...projection_3);
        const projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      for (const anyStringEq_7 of returnComparator()) {
        if (anyStringEq_7 == "pending") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Reservations);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        const flat_4: any[] = [].concat(...projection_3);
        const projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      for (const anyStringEq_7 of returnComparator()) {
        if (anyStringEq_7 == "terminated") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceStopped instead. waitForInstanceStopped does not throw error in non-success cases.
 */
export const waitForInstanceStopped = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export const waitUntilInstanceStopped = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
