// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { GetTagKeysCommand, GetTagKeysCommandInput, GetTagKeysCommandOutput } from "../commands/GetTagKeysCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ResourceGroupsTaggingAPIClient) {
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
