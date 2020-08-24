import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  SearchProductsAsAdminCommand,
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
} from "../commands/SearchProductsAsAdminCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: SearchProductsAsAdminCommandInput,
  ...args: any
): Promise<SearchProductsAsAdminCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProductsAsAdminCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: SearchProductsAsAdminCommandInput,
  ...args: any
): Promise<SearchProductsAsAdminCommandOutput> => {
  // @ts-ignore
  return await client.searchProductsAsAdmin(input, ...args);
};
export async function* searchProductsAsAdminPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProductsAsAdminCommandInput,
  ...additionalArguments: any
): Paginator<SearchProductsAsAdminCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchProductsAsAdminCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
