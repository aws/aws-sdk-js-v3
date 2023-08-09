// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPortfolioAccessCommand,
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
} from "../commands/ListPortfolioAccessCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListPortfolioAccessCommandInput,
  ...args: any
): Promise<ListPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPortfolioAccessCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPortfolioAccess(
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfolioAccessCommandInput,
  ...additionalArguments: any
): Paginator<ListPortfolioAccessCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPortfolioAccessCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalogClient) {
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
