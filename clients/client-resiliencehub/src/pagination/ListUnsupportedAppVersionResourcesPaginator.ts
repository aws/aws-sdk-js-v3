// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListUnsupportedAppVersionResourcesCommand,
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "../commands/ListUnsupportedAppVersionResourcesCommand";
import { Resiliencehub } from "../Resiliencehub";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListUnsupportedAppVersionResourcesCommandInput,
  ...args: any
): Promise<ListUnsupportedAppVersionResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUnsupportedAppVersionResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Resiliencehub,
  input: ListUnsupportedAppVersionResourcesCommandInput,
  ...args: any
): Promise<ListUnsupportedAppVersionResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listUnsupportedAppVersionResources(input, ...args);
};
export async function* paginateListUnsupportedAppVersionResources(
  config: ResiliencehubPaginationConfiguration,
  input: ListUnsupportedAppVersionResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListUnsupportedAppVersionResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUnsupportedAppVersionResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Resiliencehub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResiliencehubClient) {
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
