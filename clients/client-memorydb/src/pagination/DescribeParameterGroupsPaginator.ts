// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeParameterGroupsCommand,
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "../commands/DescribeParameterGroupsCommand";
import { MemoryDB } from "../MemoryDB";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MemoryDBClient,
  input: DescribeParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeParameterGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MemoryDB,
  input: DescribeParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeParameterGroups(input, ...args);
};
export async function* paginateDescribeParameterGroups(
  config: MemoryDBPaginationConfiguration,
  input: DescribeParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeParameterGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeParameterGroupsCommandOutput;
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
