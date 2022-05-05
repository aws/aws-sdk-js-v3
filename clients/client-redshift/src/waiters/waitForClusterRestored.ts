// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeClustersCommand, DescribeClustersCommandInput } from "../commands/DescribeClustersCommand";
import { RedshiftClient } from "../RedshiftClient";

const checkState = async (client: RedshiftClient, input: DescribeClustersCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeClustersCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Clusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.RestoreStatus.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "completed";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Clusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.ClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleting") {
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
 *  @deprecated Use waitUntilClusterRestored instead. waitForClusterRestored does not throw error in non-success cases.
 */
export const waitForClusterRestored = async (
  params: WaiterConfiguration<RedshiftClient>,
  input: DescribeClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClustersCommand for polling.
 */
export const waitUntilClusterRestored = async (
  params: WaiterConfiguration<RedshiftClient>,
  input: DescribeClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
