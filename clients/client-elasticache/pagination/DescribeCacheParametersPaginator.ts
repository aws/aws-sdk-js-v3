import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeCacheParametersCommand,
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "../commands/DescribeCacheParametersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheParametersCommandInput,
  ...args: any
): Promise<DescribeCacheParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheParametersCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheParametersCommandInput,
  ...args: any
): Promise<DescribeCacheParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheParameters(input, ...args);
};
export async function* describeCacheParametersPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheParametersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeCacheParametersCommandOutput;
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
