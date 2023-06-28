// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchProvisionedProductsCommand,
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "../commands/SearchProvisionedProductsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: SearchProvisionedProductsCommandInput,
  ...args: any
): Promise<SearchProvisionedProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProvisionedProductsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchProvisionedProducts(
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProvisionedProductsCommandInput,
  ...additionalArguments: any
): Paginator<SearchProvisionedProductsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchProvisionedProductsCommandOutput;
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
