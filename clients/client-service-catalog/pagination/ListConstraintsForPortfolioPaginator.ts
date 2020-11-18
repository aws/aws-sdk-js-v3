import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListConstraintsForPortfolioCommand,
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
} from "../commands/ListConstraintsForPortfolioCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListConstraintsForPortfolioCommandInput,
  ...args: any
): Promise<ListConstraintsForPortfolioCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConstraintsForPortfolioCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListConstraintsForPortfolioCommandInput,
  ...args: any
): Promise<ListConstraintsForPortfolioCommandOutput> => {
  // @ts-ignore
  return await client.listConstraintsForPortfolio(input, ...args);
};
export async function* paginateListConstraintsForPortfolio(
  config: ServiceCatalogPaginationConfiguration,
  input: ListConstraintsForPortfolioCommandInput,
  ...additionalArguments: any
): Paginator<ListConstraintsForPortfolioCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConstraintsForPortfolioCommandOutput;
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
