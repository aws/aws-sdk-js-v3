// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAcceptedPortfolioSharesCommand,
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
} from "../commands/ListAcceptedPortfolioSharesCommand";
import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...args: any
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAcceptedPortfolioSharesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...args: any
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  // @ts-ignore
  return await client.listAcceptedPortfolioShares(input, ...args);
};
export async function* paginateListAcceptedPortfolioShares(
  config: ServiceCatalogPaginationConfiguration,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...additionalArguments: any
): Paginator<ListAcceptedPortfolioSharesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAcceptedPortfolioSharesCommandOutput;
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
