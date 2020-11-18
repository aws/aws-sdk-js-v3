import { ResourceGroups } from "../ResourceGroups";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "../commands/SearchResourcesCommand";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ResourceGroupsClient,
  input: SearchResourcesCommandInput,
  ...args: any
): Promise<SearchResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchResourcesCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
