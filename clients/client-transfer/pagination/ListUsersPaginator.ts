import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: TransferClient,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Transfer,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.listUsers(input, ...args);
};
export async function* listUsersPaginate(
  config: TransferPaginationConfiguration,
  input: ListUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListUsersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUsersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transfer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TransferClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transfer | TransferClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
