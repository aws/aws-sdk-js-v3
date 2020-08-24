import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "../commands/DescribeServiceUpdatesCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeServiceUpdatesCommandInput,
  ...args: any
): Promise<DescribeServiceUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServiceUpdatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeServiceUpdatesCommandInput,
  ...args: any
): Promise<DescribeServiceUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.describeServiceUpdates(input, ...args);
};
export async function* describeServiceUpdatesPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeServiceUpdatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServiceUpdatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeServiceUpdatesCommandOutput;
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
