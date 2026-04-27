// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeTasksCommandInput,
  type DescribeTasksCommandOutput,
  DescribeTasksCommand,
} from "../commands/DescribeTasksCommand";
import type { ECSClient } from "../ECSClient";
import type { ECSServiceException } from "../models/ECSServiceException";

const checkState = async (client: ECSClient, input: DescribeTasksCommandInput): Promise<WaiterResult<DescribeTasksCommandOutput | ECSServiceException>> => {
  let reason;
  try {
    let result: DescribeTasksCommandOutput & any = await client.send(new DescribeTasksCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.tasks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.lastStatus;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "STOPPED")
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
 *  @deprecated Use waitUntilTasksStopped instead. waitForTasksStopped does not throw error in non-success cases.
 */
export const waitForTasksStopped = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeTasksCommandInput
): Promise<WaiterResult<DescribeTasksCommandOutput | ECSServiceException>> => {
  const serviceDefaults = { minDelay: 6, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTasksCommand for polling.
 */
export const waitUntilTasksStopped = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeTasksCommandInput
): Promise<WaiterResult<DescribeTasksCommandOutput>> => {
  const serviceDefaults = { minDelay: 6, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeTasksCommandOutput>;
};
