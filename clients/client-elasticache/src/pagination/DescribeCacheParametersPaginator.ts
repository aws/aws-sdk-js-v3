// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeCacheParametersCommand,
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "../commands/DescribeCacheParametersCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheParametersCommandInput,
  ...args: any
): Promise<DescribeCacheParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheParametersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeCacheParameters(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCacheParametersCommandOutput;
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
