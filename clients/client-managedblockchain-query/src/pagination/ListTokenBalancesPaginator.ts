// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTokenBalancesCommand,
  ListTokenBalancesCommandInput,
  ListTokenBalancesCommandOutput,
} from "../commands/ListTokenBalancesCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainQueryClient,
  input: ListTokenBalancesCommandInput,
  ...args: any
): Promise<ListTokenBalancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTokenBalancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTokenBalances(
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListTokenBalancesCommandInput,
  ...additionalArguments: any
): Paginator<ListTokenBalancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTokenBalancesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchainQueryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchainQuery | ManagedBlockchainQueryClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
