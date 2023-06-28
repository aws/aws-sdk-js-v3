// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchResourceTagsCommand,
  SearchResourceTagsCommandInput,
  SearchResourceTagsCommandOutput,
} from "../commands/SearchResourceTagsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: SearchResourceTagsCommandInput,
  ...args: any
): Promise<SearchResourceTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchResourceTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchResourceTags(
  config: ConnectPaginationConfiguration,
  input: SearchResourceTagsCommandInput,
  ...additionalArguments: any
): Paginator<SearchResourceTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchResourceTagsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
