// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchProductsAsAdminCommand,
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
} from "../commands/SearchProductsAsAdminCommand";
import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: SearchProductsAsAdminCommandInput,
  ...args: any
): Promise<SearchProductsAsAdminCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProductsAsAdminCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: SearchProductsAsAdminCommandInput,
  ...args: any
): Promise<SearchProductsAsAdminCommandOutput> => {
  // @ts-ignore
  return await client.searchProductsAsAdmin(input, ...args);
};
export async function* paginateSearchProductsAsAdmin(
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProductsAsAdminCommandInput,
  ...additionalArguments: any
): Paginator<SearchProductsAsAdminCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchProductsAsAdminCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
