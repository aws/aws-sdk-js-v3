// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchTablesCommand,
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
} from "../commands/SearchTablesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: SearchTablesCommandInput,
  ...args: any
): Promise<SearchTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchTablesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchTables(
  config: GluePaginationConfiguration,
  input: SearchTablesCommandInput,
  ...additionalArguments: any
): Paginator<SearchTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchTablesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
