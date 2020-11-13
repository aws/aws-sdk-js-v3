import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUsersCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.describeUsers(input, ...args);
};
export async function* describeUsersPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUsersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUsersCommandOutput;
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
