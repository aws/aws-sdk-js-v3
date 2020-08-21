import { SSO } from "../SSO";
import { SSOClient } from "../SSOClient";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { SSOPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSOClient,
  input: ListAccountsCommandInput,
  ...args: any
): Promise<ListAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSO,
  input: ListAccountsCommandInput,
  ...args: any
): Promise<ListAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listAccounts(input, ...args);
};
export async function* listAccountsPaginate(
  config: SSOPaginationConfiguration,
  input: ListAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAccountsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSO) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSO | SSOClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
