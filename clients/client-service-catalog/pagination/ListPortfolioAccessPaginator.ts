import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListPortfolioAccessCommand,
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
} from "../commands/ListPortfolioAccessCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListPortfolioAccessCommandInput,
  ...args: any
): Promise<ListPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPortfolioAccessCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListPortfolioAccessCommandInput,
  ...args: any
): Promise<ListPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.listPortfolioAccess(input, ...args);
};
export async function* listPortfolioAccessPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfolioAccessCommandInput,
  ...additionalArguments: any
): Paginator<ListPortfolioAccessCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPortfolioAccessCommandOutput;
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
    token = page.NextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
