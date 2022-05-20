// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "../commands/GetResourcesCommand";
import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetResourcesCommandInput,
  ...args: any
): Promise<GetResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetResourcesCommandInput,
  ...args: any
): Promise<GetResourcesCommandOutput> => {
  // @ts-ignore
  return await client.getResources(input, ...args);
};
export async function* paginateGetResources(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetResourcesCommandInput,
  ...additionalArguments: any
): Paginator<GetResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PaginationToken
  let token: typeof input.PaginationToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourcesCommandOutput;
  while (hasNext) {
    input.PaginationToken = token;
    input["ResourcesPerPage"] = config.pageSize;
    if (config.client instanceof ResourceGroupsTaggingAPI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsTaggingAPIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient");
    }
    yield page;
    const prevToken = token;
    token = page.PaginationToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
