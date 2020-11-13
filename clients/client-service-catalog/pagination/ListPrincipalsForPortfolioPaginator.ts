import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListPrincipalsForPortfolioCommand,
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
} from "../commands/ListPrincipalsForPortfolioCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListPrincipalsForPortfolioCommandInput,
  ...args: any
): Promise<ListPrincipalsForPortfolioCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPrincipalsForPortfolioCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListPrincipalsForPortfolioCommandInput,
  ...args: any
): Promise<ListPrincipalsForPortfolioCommandOutput> => {
  // @ts-ignore
  return await client.listPrincipalsForPortfolio(input, ...args);
};
export async function* listPrincipalsForPortfolioPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListPrincipalsForPortfolioCommandInput,
  ...additionalArguments: any
): Paginator<ListPrincipalsForPortfolioCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPrincipalsForPortfolioCommandOutput;
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
