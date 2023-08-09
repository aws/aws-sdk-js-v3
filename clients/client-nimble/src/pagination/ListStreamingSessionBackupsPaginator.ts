// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStreamingSessionBackupsCommand,
  ListStreamingSessionBackupsCommandInput,
  ListStreamingSessionBackupsCommandOutput,
} from "../commands/ListStreamingSessionBackupsCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListStreamingSessionBackupsCommandInput,
  ...args: any
): Promise<ListStreamingSessionBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamingSessionBackupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStreamingSessionBackups(
  config: NimblePaginationConfiguration,
  input: ListStreamingSessionBackupsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamingSessionBackupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamingSessionBackupsCommandOutput;
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
