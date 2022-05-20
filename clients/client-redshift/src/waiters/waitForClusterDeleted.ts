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
          return element_2.ClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "creating") {
          return { state: WaiterState.FAILURE, reason };
        }
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
        if (anyStringEq_4 == "modifying") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ClusterNotFound") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilClusterDeleted instead. waitForClusterDeleted does not throw error in non-success cases.
 */
export const waitForClusterDeleted = async (
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
export const waitUntilClusterDeleted = async (
  params: WaiterConfiguration<RedshiftClient>,
  input: DescribeClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
