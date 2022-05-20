// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
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
  client: ConfigService,
  input: ListDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDiscoveredResources(input, ...args);
};
export async function* paginateListDiscoveredResources(
  config: ConfigServicePaginationConfiguration,
  input: ListDiscoveredResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDiscoveredResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDiscoveredResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
