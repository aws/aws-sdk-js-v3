import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeGlobalReplicationGroupsCommand,
  DescribeGlobalReplicationGroupsCommandInput,
  DescribeGlobalReplicationGroupsCommandOutput,
} from "../commands/DescribeGlobalReplicationGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeGlobalReplicationGroupsCommandInput,
  ...args: any
): Promise<DescribeGlobalReplicationGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGlobalReplicationGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeGlobalReplicationGroupsCommandInput,
  ...args: any
): Promise<DescribeGlobalReplicationGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeGlobalReplicationGroups(input, ...args);
};
export async function* paginateDescribeGlobalReplicationGroups(
  config: ElastiCachePaginationConfiguration,
  input: DescribeGlobalReplicationGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGlobalReplicationGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGlobalReplicationGroupsCommandOutput;
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
