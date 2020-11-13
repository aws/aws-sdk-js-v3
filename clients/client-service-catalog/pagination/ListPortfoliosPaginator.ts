import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListPortfoliosCommand,
  ListPortfoliosCommandInput,
  ListPortfoliosCommandOutput,
} from "../commands/ListPortfoliosCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListPortfoliosCommandInput,
  ...args: any
): Promise<ListPortfoliosCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPortfoliosCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListPortfoliosCommandInput,
  ...args: any
): Promise<ListPortfoliosCommandOutput> => {
  // @ts-ignore
  return await client.listPortfolios(input, ...args);
};
export async function* listPortfoliosPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfoliosCommandInput,
  ...additionalArguments: any
): Paginator<ListPortfoliosCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPortfoliosCommandOutput;
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
