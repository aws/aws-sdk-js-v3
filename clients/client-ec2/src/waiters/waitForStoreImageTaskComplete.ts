// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeStoreImageTasksCommand,
  DescribeStoreImageTasksCommandInput,
} from "../commands/DescribeStoreImageTasksCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeStoreImageTasksCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeStoreImageTasksCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.StoreImageTaskResults);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StoreTaskState;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "Completed";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.StoreImageTaskResults);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StoreTaskState;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "Failed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.StoreImageTaskResults);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.StoreTaskState;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "InProgress") {
          return { state: WaiterState.RETRY, reason };
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
 *  @deprecated Use waitUntilStoreImageTaskComplete instead. waitForStoreImageTaskComplete does not throw error in non-success cases.
 */
export const waitForStoreImageTaskComplete = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeStoreImageTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStoreImageTasksCommand for polling.
 */
export const waitUntilStoreImageTaskComplete = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeStoreImageTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
