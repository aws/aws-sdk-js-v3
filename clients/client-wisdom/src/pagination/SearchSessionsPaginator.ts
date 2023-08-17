// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchSessionsCommand,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput,
} from "../commands/SearchSessionsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: SearchSessionsCommandInput,
  ...args: any
): Promise<SearchSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSessionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchSessions(
  config: WisdomPaginationConfiguration,
  input: SearchSessionsCommandInput,
  ...additionalArguments: any
): Paginator<SearchSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSessionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof WisdomClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Wisdom | WisdomClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
