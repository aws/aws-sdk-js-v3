// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand";
import { Macie } from "../Macie";
import { MacieClient } from "../MacieClient";
import { MaciePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MacieClient,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMemberAccountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Macie,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listMemberAccounts(input, ...args);
};
export async function* paginateListMemberAccounts(
  config: MaciePaginationConfiguration,
  input: ListMemberAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListMemberAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMemberAccountsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MacieClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie | MacieClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
