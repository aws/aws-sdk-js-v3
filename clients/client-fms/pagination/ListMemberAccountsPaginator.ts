import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand";
import { FMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FMSClient,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMemberAccountsCommand(input, ...args));
};
const makePagedRequest = async (
  client: FMS,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listMemberAccounts(input, ...args);
};
export async function* listMemberAccountsPaginate(
  config: FMSPaginationConfiguration,
  input: ListMemberAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListMemberAccountsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMemberAccountsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
