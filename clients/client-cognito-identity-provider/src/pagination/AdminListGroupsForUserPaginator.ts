// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  AdminListGroupsForUserCommand,
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "../commands/AdminListGroupsForUserCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: AdminListGroupsForUserCommandInput,
  ...args: any
): Promise<AdminListGroupsForUserCommandOutput> => {
  // @ts-ignore
  return await client.send(new AdminListGroupsForUserCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: AdminListGroupsForUserCommandInput,
  ...args: any
): Promise<AdminListGroupsForUserCommandOutput> => {
  // @ts-ignore
  return await client.adminListGroupsForUser(input, ...args);
};
export async function* paginateAdminListGroupsForUser(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: AdminListGroupsForUserCommandInput,
  ...additionalArguments: any
): Paginator<AdminListGroupsForUserCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: AdminListGroupsForUserCommandOutput;
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
