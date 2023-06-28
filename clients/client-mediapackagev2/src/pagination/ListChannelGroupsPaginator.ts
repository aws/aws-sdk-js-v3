// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListChannelGroupsCommand,
  ListChannelGroupsCommandInput,
  ListChannelGroupsCommandOutput,
} from "../commands/ListChannelGroupsCommand";
import { MediaPackageV2Client } from "../MediaPackageV2Client";
import { MediaPackageV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaPackageV2Client,
  input: ListChannelGroupsCommandInput,
  ...args: any
): Promise<ListChannelGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListChannelGroups(
  config: MediaPackageV2PaginationConfiguration,
  input: ListChannelGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackageV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackageV2 | MediaPackageV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
