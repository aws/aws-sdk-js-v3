// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListQuickResponsesCommand,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput,
} from "../commands/ListQuickResponsesCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: ListQuickResponsesCommandInput,
  ...args: any
): Promise<ListQuickResponsesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQuickResponsesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListQuickResponses(
  config: WisdomPaginationConfiguration,
  input: ListQuickResponsesCommandInput,
  ...additionalArguments: any
): Paginator<ListQuickResponsesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQuickResponsesCommandOutput;
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
