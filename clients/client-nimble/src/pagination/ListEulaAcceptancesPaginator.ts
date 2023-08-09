// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEulaAcceptancesCommand,
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
} from "../commands/ListEulaAcceptancesCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListEulaAcceptancesCommandInput,
  ...args: any
): Promise<ListEulaAcceptancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEulaAcceptancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEulaAcceptances(
  config: NimblePaginationConfiguration,
  input: ListEulaAcceptancesCommandInput,
  ...additionalArguments: any
): Paginator<ListEulaAcceptancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEulaAcceptancesCommandOutput;
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
