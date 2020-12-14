import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "../commands/DescribeCacheSecurityGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheSecurityGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheSecurityGroups(input, ...args);
};
export async function* paginateDescribeCacheSecurityGroups(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheSecurityGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheSecurityGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCacheSecurityGroupsCommandOutput;
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
