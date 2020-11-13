import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  SearchProvisionedProductsCommand,
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "../commands/SearchProvisionedProductsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: SearchProvisionedProductsCommandInput,
  ...args: any
): Promise<SearchProvisionedProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProvisionedProductsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: SearchProvisionedProductsCommandInput,
  ...args: any
): Promise<SearchProvisionedProductsCommandOutput> => {
  // @ts-ignore
  return await client.searchProvisionedProducts(input, ...args);
};
export async function* searchProvisionedProductsPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProvisionedProductsCommandInput,
  ...additionalArguments: any
): Paginator<SearchProvisionedProductsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchProvisionedProductsCommandOutput;
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
