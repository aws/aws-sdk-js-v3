// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "../commands/ListTransactionsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainQueryClient,
  input: ListTransactionsCommandInput,
  ...args: any
): Promise<ListTransactionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTransactionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTransactions(
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListTransactionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTransactionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTransactionsCommandOutput;
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
