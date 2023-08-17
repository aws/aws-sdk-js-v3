// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListStudiosCommandInput,
  ...args: any
): Promise<ListStudiosCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudiosCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStudios(
  config: NimblePaginationConfiguration,
  input: ListStudiosCommandInput,
  ...additionalArguments: any
): Paginator<ListStudiosCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudiosCommandOutput;
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
