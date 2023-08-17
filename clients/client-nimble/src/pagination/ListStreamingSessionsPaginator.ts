// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStreamingSessionsCommand,
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "../commands/ListStreamingSessionsCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListStreamingSessionsCommandInput,
  ...args: any
): Promise<ListStreamingSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamingSessionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStreamingSessions(
  config: NimblePaginationConfiguration,
  input: ListStreamingSessionsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamingSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamingSessionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof NimbleClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Nimble | NimbleClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
