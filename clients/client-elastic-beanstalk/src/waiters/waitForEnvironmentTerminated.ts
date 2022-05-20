// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeEnvironmentsCommand, DescribeEnvironmentsCommandInput } from "../commands/DescribeEnvironmentsCommand";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";

const checkState = async (
  client: ElasticBeanstalkClient,
  input: DescribeEnvironmentsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeEnvironmentsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Environments);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "Terminated";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Environments);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "Terminating";
      }
      if (allStringEq_5) {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilEnvironmentTerminated instead. waitForEnvironmentTerminated does not throw error in non-success cases.
 */
export const waitForEnvironmentTerminated = async (
  params: WaiterConfiguration<ElasticBeanstalkClient>,
  input: DescribeEnvironmentsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEnvironmentsCommand for polling.
 */
export const waitUntilEnvironmentTerminated = async (
  params: WaiterConfiguration<ElasticBeanstalkClient>,
  input: DescribeEnvironmentsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
