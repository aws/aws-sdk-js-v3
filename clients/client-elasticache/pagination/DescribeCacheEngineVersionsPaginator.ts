import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheEngineVersionsCommand,
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
} from "../commands/DescribeCacheEngineVersionsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheEngineVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeCacheEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheEngineVersions(input, ...args);
};
export async function* paginateDescribeCacheEngineVersions(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheEngineVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCacheEngineVersionsCommandOutput;
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
