import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogAppRegistryClient,
  input: ListApplicationsCommandInput,
  ...args: any
): Promise<ListApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalogAppRegistry,
  input: ListApplicationsCommandInput,
  ...args: any
): Promise<ListApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listApplications(input, ...args);
};
export async function* listApplicationsPaginate(
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationsCommandOutput;
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
