// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListLexBotsCommand, ListLexBotsCommandInput, ListLexBotsCommandOutput } from "../commands/ListLexBotsCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListLexBotsCommandInput,
  ...args: any
): Promise<ListLexBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLexBotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListLexBotsCommandInput,
  ...args: any
): Promise<ListLexBotsCommandOutput> => {
  // @ts-ignore
  return await client.listLexBots(input, ...args);
};
export async function* paginateListLexBots(
  config: ConnectPaginationConfiguration,
  input: ListLexBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListLexBotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLexBotsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
