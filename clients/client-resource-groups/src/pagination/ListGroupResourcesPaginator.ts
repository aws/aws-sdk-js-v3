// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "../commands/ListGroupResourcesCommand";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ResourceGroupsClient) {
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
