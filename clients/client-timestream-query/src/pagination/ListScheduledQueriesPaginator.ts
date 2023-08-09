// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListScheduledQueriesCommand,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "../commands/ListScheduledQueriesCommand";
import { TimestreamQueryClient } from "../TimestreamQueryClient";
import { TimestreamQueryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TimestreamQueryClient,
  input: ListScheduledQueriesCommandInput,
  ...args: any
): Promise<ListScheduledQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScheduledQueriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListScheduledQueries(
  config: TimestreamQueryPaginationConfiguration,
  input: ListScheduledQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListScheduledQueriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScheduledQueriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TimestreamQueryClient) {
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
