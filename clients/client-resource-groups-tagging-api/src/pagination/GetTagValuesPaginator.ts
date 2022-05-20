// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetTagValuesCommand,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
} from "../commands/GetTagValuesCommand";
import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetTagValuesCommandInput,
  ...args: any
): Promise<GetTagValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTagValuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetTagValuesCommandInput,
  ...args: any
): Promise<GetTagValuesCommandOutput> => {
  // @ts-ignore
  return await client.getTagValues(input, ...args);
};
export async function* paginateGetTagValues(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetTagValuesCommandInput,
  ...additionalArguments: any
): Paginator<GetTagValuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PaginationToken
  let token: typeof input.PaginationToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTagValuesCommandOutput;
  while (hasNext) {
    input.PaginationToken = token;
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
