// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { TimestreamQuery } from "../TimestreamQuery";
import { TimestreamQueryClient } from "../TimestreamQueryClient";
import { TimestreamQueryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TimestreamQueryClient,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: TimestreamQuery,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  // @ts-ignore
  return await client.query(input, ...args);
};
export async function* paginateQuery(
  config: TimestreamQueryPaginationConfiguration,
  input: QueryCommandInput,
  ...additionalArguments: any
): Paginator<QueryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRows"] = config.pageSize;
    if (config.client instanceof TimestreamQuery) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TimestreamQueryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected TimestreamQuery | TimestreamQueryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
