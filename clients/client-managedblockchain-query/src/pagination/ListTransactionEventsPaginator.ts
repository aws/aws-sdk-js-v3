// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTransactionEventsCommand,
  ListTransactionEventsCommandInput,
  ListTransactionEventsCommandOutput,
} from "../commands/ListTransactionEventsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainQueryClient,
  input: ListTransactionEventsCommandInput,
  ...args: any
): Promise<ListTransactionEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTransactionEventsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTransactionEvents(
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListTransactionEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListTransactionEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTransactionEventsCommandOutput;
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
