import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListResourcesForTagOptionCommand,
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput,
} from "../commands/ListResourcesForTagOptionCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListResourcesForTagOptionCommandInput,
  ...args: any
): Promise<ListResourcesForTagOptionCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcesForTagOptionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListResourcesForTagOptionCommandInput,
  ...args: any
): Promise<ListResourcesForTagOptionCommandOutput> => {
  // @ts-ignore
  return await client.listResourcesForTagOption(input, ...args);
};
export async function* paginateListResourcesForTagOption(
  config: ServiceCatalogPaginationConfiguration,
  input: ListResourcesForTagOptionCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcesForTagOptionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourcesForTagOptionCommandOutput;
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
    token = page.PageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
