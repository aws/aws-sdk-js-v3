import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import {
  ListAttributeGroupsCommand,
  ListAttributeGroupsCommandInput,
  ListAttributeGroupsCommandOutput,
} from "../commands/ListAttributeGroupsCommand";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogAppRegistryClient,
  input: ListAttributeGroupsCommandInput,
  ...args: any
): Promise<ListAttributeGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttributeGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalogAppRegistry,
  input: ListAttributeGroupsCommandInput,
  ...args: any
): Promise<ListAttributeGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listAttributeGroups(input, ...args);
};
export async function* paginateListAttributeGroups(
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAttributeGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListAttributeGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttributeGroupsCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
