import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheClustersCommand,
  DescribeCacheClustersCommandInput,
} from "../commands/DescribeCacheClustersCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ElastiCacheClient,
  input: DescribeCacheClustersCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeCacheClustersCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.CacheClusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.CacheClusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleted") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.CacheClusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleting") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.CacheClusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-network") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.CacheClusters);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "restore-failed") {
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
 * Wait until ElastiCache cluster is available.
 *  @deprecated Use waitUntilCacheClusterAvailable instead. waitForCacheClusterAvailable does not throw error in non-success cases.
 */
export const waitForCacheClusterAvailable = async (
  params: WaiterConfiguration<ElastiCacheClient>,
  input: DescribeCacheClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until ElastiCache cluster is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCacheClustersCommand for polling.
 */
export const waitUntilCacheClusterAvailable = async (
  params: WaiterConfiguration<ElastiCacheClient>,
  input: DescribeCacheClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
