import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  SearchTablesCommand,
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
} from "../commands/SearchTablesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: SearchTablesCommandInput,
  ...args: any
): Promise<SearchTablesCommandOutput> => {
  // @ts-ignore
  return await client.searchTables(input, ...args);
};
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
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
