import { Macie } from "../Macie";
import { MacieClient } from "../MacieClient";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand";
import { MaciePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MacieClient,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMemberAccountsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Macie,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listMemberAccounts(input, ...args);
};
export async function* listMemberAccountsPaginate(
  config: MaciePaginationConfiguration,
  input: ListMemberAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListMemberAccountsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
