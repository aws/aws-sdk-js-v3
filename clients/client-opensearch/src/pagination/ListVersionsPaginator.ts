// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "../commands/ListVersionsCommand";
import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: ListVersionsCommandInput,
  ...args: any
): Promise<ListVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: ListVersionsCommandInput,
  ...args: any
): Promise<ListVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listVersions(input, ...args);
};
export async function* paginateListVersions(
  config: OpenSearchPaginationConfiguration,
  input: ListVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
