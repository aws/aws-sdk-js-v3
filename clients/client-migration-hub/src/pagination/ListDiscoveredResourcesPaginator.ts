import { MigrationHub } from "../MigrationHub";
import { MigrationHubClient } from "../MigrationHubClient";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDiscoveredResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHub,
  input: ListDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDiscoveredResources(input, ...args);
};
export async function* paginateListDiscoveredResources(
  config: MigrationHubPaginationConfiguration,
  input: ListDiscoveredResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDiscoveredResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDiscoveredResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHub | MigrationHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
