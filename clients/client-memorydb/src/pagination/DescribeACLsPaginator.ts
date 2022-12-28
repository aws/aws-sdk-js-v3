// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeACLsCommand,
  DescribeACLsCommandInput,
  DescribeACLsCommandOutput,
} from "../commands/DescribeACLsCommand";
import { MemoryDB } from "../MemoryDB";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MemoryDBClient,
  input: DescribeACLsCommandInput,
  ...args: any
): Promise<DescribeACLsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeACLsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MemoryDB,
  input: DescribeACLsCommandInput,
  ...args: any
): Promise<DescribeACLsCommandOutput> => {
  // @ts-ignore
  return await client.describeACLs(input, ...args);
};
export async function* paginateDescribeACLs(
  config: MemoryDBPaginationConfiguration,
  input: DescribeACLsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeACLsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeACLsCommandOutput;
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
