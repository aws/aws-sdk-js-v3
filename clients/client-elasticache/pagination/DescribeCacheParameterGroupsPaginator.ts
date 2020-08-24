import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "../commands/DescribeCacheParameterGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheParameterGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheParameterGroups(input, ...args);
};
export async function* describeCacheParameterGroupsPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheParameterGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeCacheParameterGroupsCommandOutput;
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
