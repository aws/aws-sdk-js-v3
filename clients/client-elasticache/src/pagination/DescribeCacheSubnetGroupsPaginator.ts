// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeCacheSubnetGroupsCommand,
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "../commands/DescribeCacheSubnetGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
