// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDomainsForPackageCommand,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "../commands/ListDomainsForPackageCommand";
import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: ListDomainsForPackageCommandInput,
  ...args: any
): Promise<ListDomainsForPackageCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsForPackageCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: ListDomainsForPackageCommandInput,
  ...args: any
): Promise<ListDomainsForPackageCommandOutput> => {
  // @ts-ignore
  return await client.listDomainsForPackage(input, ...args);
};
export async function* paginateListDomainsForPackage(
  config: OpenSearchPaginationConfiguration,
  input: ListDomainsForPackageCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsForPackageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainsForPackageCommandOutput;
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
