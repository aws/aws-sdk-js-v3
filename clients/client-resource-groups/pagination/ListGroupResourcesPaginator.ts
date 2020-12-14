import { ResourceGroups } from "../ResourceGroups";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "../commands/ListGroupResourcesCommand";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceGroupsClient,
  input: ListGroupResourcesCommandInput,
  ...args: any
): Promise<ListGroupResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceGroups,
  input: ListGroupResourcesCommandInput,
  ...args: any
): Promise<ListGroupResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listGroupResources(input, ...args);
};
export async function* paginateListGroupResources(
  config: ResourceGroupsPaginationConfiguration,
  input: ListGroupResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupResourcesCommandOutput;
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
