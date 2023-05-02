// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "../commands/DescribeEngineVersionsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof MemoryDBClient) {
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
