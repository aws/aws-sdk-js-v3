// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssociatedResourcesCommand,
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
} from "../commands/ListAssociatedResourcesCommand";
import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogAppRegistryClient,
  input: ListAssociatedResourcesCommandInput,
  ...args: any
): Promise<ListAssociatedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalogAppRegistry,
  input: ListAssociatedResourcesCommandInput,
  ...args: any
): Promise<ListAssociatedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedResources(input, ...args);
};
export async function* paginateListAssociatedResources(
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAssociatedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ServiceCatalogAppRegistry) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogAppRegistryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalogAppRegistry | ServiceCatalogAppRegistryClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
