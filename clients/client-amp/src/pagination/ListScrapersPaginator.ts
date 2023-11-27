// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AmpClient } from "../AmpClient";
import {
  ListScrapersCommand,
  ListScrapersCommandInput,
  ListScrapersCommandOutput,
} from "../commands/ListScrapersCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AmpClient,
  input: ListScrapersCommandInput,
  ...args: any
): Promise<ListScrapersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScrapersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListScrapers(
  config: AmpPaginationConfiguration,
  input: ListScrapersCommandInput,
  ...additionalArguments: any
): Paginator<ListScrapersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScrapersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AmpClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amp | AmpClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
