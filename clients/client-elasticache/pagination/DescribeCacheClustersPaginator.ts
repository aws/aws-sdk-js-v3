import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheClustersCommand,
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
} from "../commands/DescribeCacheClustersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheClustersCommandInput,
  ...args: any
): Promise<DescribeCacheClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheClustersCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheClustersCommandInput,
  ...args: any
): Promise<DescribeCacheClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheClusters(input, ...args);
};
export async function* describeCacheClustersPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheClustersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeCacheClustersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
