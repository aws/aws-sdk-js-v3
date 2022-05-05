// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeCacheClustersCommand,
  DescribeCacheClustersCommandInput,
} from "../commands/DescribeCacheClustersCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";

const checkState = async (
  client: ElastiCacheClient,
  input: DescribeCacheClustersCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeCacheClustersCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "deleted";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "available") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
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
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-network") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "modifying") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "restore-failed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.CacheClusters);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.CacheClusterStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "snapshotting") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "CacheClusterNotFound") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until ElastiCache cluster is deleted.
 *  @deprecated Use waitUntilCacheClusterDeleted instead. waitForCacheClusterDeleted does not throw error in non-success cases.
 */
export const waitForCacheClusterDeleted = async (
  params: WaiterConfiguration<ElastiCacheClient>,
  input: DescribeCacheClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until ElastiCache cluster is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCacheClustersCommand for polling.
 */
export const waitUntilCacheClusterDeleted = async (
  params: WaiterConfiguration<ElastiCacheClient>,
  input: DescribeCacheClustersCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
