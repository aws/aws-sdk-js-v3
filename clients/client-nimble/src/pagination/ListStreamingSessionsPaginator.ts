// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListStreamingSessionsCommand,
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "../commands/ListStreamingSessionsCommand";
import { Nimble } from "../Nimble";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Nimble,
  input: ListStreamingSessionsCommandInput,
  ...args: any
): Promise<ListStreamingSessionsCommandOutput> => {
  // @ts-ignore
  return await client.listStreamingSessions(input, ...args);
};
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
    if (config.client instanceof Nimble) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NimbleClient) {
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
