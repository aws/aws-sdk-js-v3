// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "../commands/SearchResourcesCommand";
import { ResourceGroups } from "../ResourceGroups";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceGroupsClient,
  input: SearchResourcesCommandInput,
  ...args: any
): Promise<SearchResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceGroups,
  input: SearchResourcesCommandInput,
  ...args: any
): Promise<SearchResourcesCommandOutput> => {
  // @ts-ignore
  return await client.searchResources(input, ...args);
};
export async function* paginateSearchResources(
  config: ResourceGroupsPaginationConfiguration,
  input: SearchResourcesCommandInput,
  ...additionalArguments: any
): Paginator<SearchResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ResourceGroups) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroups | ResourceGroupsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
