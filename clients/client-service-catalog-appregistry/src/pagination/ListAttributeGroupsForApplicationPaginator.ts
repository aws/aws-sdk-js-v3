// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAttributeGroupsForApplicationCommand,
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput,
} from "../commands/ListAttributeGroupsForApplicationCommand";
import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogAppRegistryClient,
  input: ListAttributeGroupsForApplicationCommandInput,
  ...args: any
): Promise<ListAttributeGroupsForApplicationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttributeGroupsForApplicationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalogAppRegistry,
  input: ListAttributeGroupsForApplicationCommandInput,
  ...args: any
): Promise<ListAttributeGroupsForApplicationCommandOutput> => {
  // @ts-ignore
  return await client.listAttributeGroupsForApplication(input, ...args);
};
export async function* paginateListAttributeGroupsForApplication(
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAttributeGroupsForApplicationCommandInput,
  ...additionalArguments: any
): Paginator<ListAttributeGroupsForApplicationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttributeGroupsForApplicationCommandOutput;
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
