import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeUserGroupsCommand,
  DescribeUserGroupsCommandInput,
  DescribeUserGroupsCommandOutput,
} from "../commands/DescribeUserGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeUserGroupsCommandInput,
  ...args: any
): Promise<DescribeUserGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUserGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeUserGroupsCommandInput,
  ...args: any
): Promise<DescribeUserGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeUserGroups(input, ...args);
};
export async function* paginateDescribeUserGroups(
  config: ElastiCachePaginationConfiguration,
  input: DescribeUserGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUserGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUserGroupsCommandOutput;
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
