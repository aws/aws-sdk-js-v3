// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListQuerySuggestionsBlockListsCommand,
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "../commands/ListQuerySuggestionsBlockListsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListQuerySuggestionsBlockListsCommandInput,
  ...args: any
): Promise<ListQuerySuggestionsBlockListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQuerySuggestionsBlockListsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListQuerySuggestionsBlockLists(
  config: KendraPaginationConfiguration,
  input: ListQuerySuggestionsBlockListsCommandInput,
  ...additionalArguments: any
): Paginator<ListQuerySuggestionsBlockListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQuerySuggestionsBlockListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
