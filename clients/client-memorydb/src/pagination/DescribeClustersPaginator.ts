// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "../commands/DescribeClustersCommand";
import { MemoryDB } from "../MemoryDB";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MemoryDBClient,
  input: DescribeClustersCommandInput,
  ...args: any
): Promise<DescribeClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MemoryDB,
  input: DescribeClustersCommandInput,
  ...args: any
): Promise<DescribeClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeClusters(input, ...args);
};
export async function* paginateDescribeClusters(
  config: MemoryDBPaginationConfiguration,
  input: DescribeClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClustersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MemoryDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MemoryDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MemoryDB | MemoryDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
