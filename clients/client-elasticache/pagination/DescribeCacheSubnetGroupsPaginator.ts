import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheSubnetGroupsCommand,
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "../commands/DescribeCacheSubnetGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheSubnetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheSubnetGroups(input, ...args);
};
export async function* paginateDescribeCacheSubnetGroups(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheSubnetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCacheSubnetGroupsCommandOutput;
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
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
