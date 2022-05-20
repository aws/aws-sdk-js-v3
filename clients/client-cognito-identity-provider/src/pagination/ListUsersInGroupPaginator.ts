// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListUsersInGroupCommand,
  ListUsersInGroupCommandInput,
  ListUsersInGroupCommandOutput,
} from "../commands/ListUsersInGroupCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: ListUsersInGroupCommandInput,
  ...args: any
): Promise<ListUsersInGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsersInGroupCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: ListUsersInGroupCommandInput,
  ...args: any
): Promise<ListUsersInGroupCommandOutput> => {
  // @ts-ignore
  return await client.listUsersInGroup(input, ...args);
};
export async function* paginateListUsersInGroup(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUsersInGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListUsersInGroupCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUsersInGroupCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof CognitoIdentityProvider) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CognitoIdentityProviderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CognitoIdentityProvider | CognitoIdentityProviderClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
