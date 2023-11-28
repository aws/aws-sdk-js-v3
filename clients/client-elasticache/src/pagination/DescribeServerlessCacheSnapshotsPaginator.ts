// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeServerlessCacheSnapshotsCommand,
  DescribeServerlessCacheSnapshotsCommandInput,
  DescribeServerlessCacheSnapshotsCommandOutput,
} from "../commands/DescribeServerlessCacheSnapshotsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeServerlessCacheSnapshotsCommandInput,
  ...args: any
): Promise<DescribeServerlessCacheSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServerlessCacheSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeServerlessCacheSnapshots(
  config: ElastiCachePaginationConfiguration,
  input: DescribeServerlessCacheSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServerlessCacheSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeServerlessCacheSnapshotsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
