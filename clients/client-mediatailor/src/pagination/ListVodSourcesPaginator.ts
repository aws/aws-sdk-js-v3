// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListVodSourcesCommand,
  ListVodSourcesCommandInput,
  ListVodSourcesCommandOutput,
} from "../commands/ListVodSourcesCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaTailorClient,
  input: ListVodSourcesCommandInput,
  ...args: any
): Promise<ListVodSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVodSourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVodSources(
  config: MediaTailorPaginationConfiguration,
  input: ListVodSourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListVodSourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVodSourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaTailorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
