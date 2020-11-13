import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListOrganizationPortfolioAccessCommand,
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "../commands/ListOrganizationPortfolioAccessCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...args: any
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationPortfolioAccessCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...args: any
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizationPortfolioAccess(input, ...args);
};
export async function* listOrganizationPortfolioAccessPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationPortfolioAccessCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationPortfolioAccessCommandOutput;
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
