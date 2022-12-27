// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "../commands/DescribeEngineVersionsCommand";
import { MemoryDB } from "../MemoryDB";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MemoryDBClient,
  input: DescribeEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEngineVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MemoryDB,
  input: DescribeEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeEngineVersions(input, ...args);
};
export async function* paginateDescribeEngineVersions(
  config: MemoryDBPaginationConfiguration,
  input: DescribeEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEngineVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEngineVersionsCommandOutput;
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
