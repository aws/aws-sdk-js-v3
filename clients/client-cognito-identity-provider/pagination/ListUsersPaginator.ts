import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsersCommand(input), ...args);
};
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.listUsers(input, ...args);
};
export async function* listUsersPaginate(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListUsersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUsersCommandOutput;
  while (hasNext) {
    input.PaginationToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof CognitoIdentityProvider) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CognitoIdentityProviderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CognitoIdentityProvider | CognitoIdentityProviderClient");
    }
    yield page;
    token = page.PaginationToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
