// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "../commands/DescribeReservedCacheNodesCommand";
import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeReservedCacheNodesCommandInput,
  ...args: any
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedCacheNodesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeReservedCacheNodesCommandInput,
  ...args: any
): Promise<DescribeReservedCacheNodesCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedCacheNodes(input, ...args);
};
export async function* paginateDescribeReservedCacheNodes(
  config: ElastiCachePaginationConfiguration,
  input: DescribeReservedCacheNodesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedCacheNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedCacheNodesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
