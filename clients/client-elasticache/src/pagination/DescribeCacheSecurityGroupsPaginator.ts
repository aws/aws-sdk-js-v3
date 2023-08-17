// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "../commands/DescribeCacheSecurityGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ElastiCacheClient) {
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
