import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsersCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.listUsers(input, ...args);
};
export async function* listUsersPaginate(
  config: IAMPaginationConfiguration,
  input: ListUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListUsersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUsersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
