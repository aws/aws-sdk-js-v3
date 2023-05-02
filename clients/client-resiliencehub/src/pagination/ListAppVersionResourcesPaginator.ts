// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAppVersionResourcesCommand,
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "../commands/ListAppVersionResourcesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListAppVersionResourcesCommandInput,
  ...args: any
): Promise<ListAppVersionResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppVersionResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppVersionResources(
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListAppVersionResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppVersionResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ResiliencehubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Resiliencehub | ResiliencehubClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
