// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
} from "../commands/ListAssociatedAttributeGroupsCommand";
import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogAppRegistryClient,
  input: ListAssociatedAttributeGroupsCommandInput,
  ...args: any
): Promise<ListAssociatedAttributeGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedAttributeGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalogAppRegistry,
  input: ListAssociatedAttributeGroupsCommandInput,
  ...args: any
): Promise<ListAssociatedAttributeGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedAttributeGroups(input, ...args);
};
export async function* paginateListAssociatedAttributeGroups(
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAssociatedAttributeGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedAttributeGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedAttributeGroupsCommandOutput;
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
