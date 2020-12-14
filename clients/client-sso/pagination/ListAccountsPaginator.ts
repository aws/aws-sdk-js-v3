import { SSO } from "../SSO";
import { SSOClient } from "../SSOClient";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { SSOPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOClient,
  input: ListAccountsCommandInput,
  ...args: any
): Promise<ListAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSO,
  input: ListAccountsCommandInput,
  ...args: any
): Promise<ListAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listAccounts(input, ...args);
};
export async function* paginateListAccounts(
  config: SSOPaginationConfiguration,
  input: ListAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSO) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSO | SSOClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
