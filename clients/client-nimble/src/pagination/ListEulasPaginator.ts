// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListEulasCommand, ListEulasCommandInput, ListEulasCommandOutput } from "../commands/ListEulasCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListEulasCommandInput,
  ...args: any
): Promise<ListEulasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEulasCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEulas(
  config: NimblePaginationConfiguration,
  input: ListEulasCommandInput,
  ...additionalArguments: any
): Paginator<ListEulasCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEulasCommandOutput;
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
