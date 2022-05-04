// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetTagKeysCommand, GetTagKeysCommandInput, GetTagKeysCommandOutput } from "../commands/GetTagKeysCommand";
import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetTagKeysCommandInput,
  ...args: any
): Promise<GetTagKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTagKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetTagKeysCommandInput,
  ...args: any
): Promise<GetTagKeysCommandOutput> => {
  // @ts-ignore
  return await client.getTagKeys(input, ...args);
};
export async function* paginateGetTagKeys(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetTagKeysCommandInput,
  ...additionalArguments: any
): Paginator<GetTagKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PaginationToken
  let token: typeof input.PaginationToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTagKeysCommandOutput;
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
