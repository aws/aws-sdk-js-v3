// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListUserPoolClientsCommand,
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "../commands/ListUserPoolClientsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: ListUserPoolClientsCommandInput,
  ...args: any
): Promise<ListUserPoolClientsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserPoolClientsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: ListUserPoolClientsCommandInput,
  ...args: any
): Promise<ListUserPoolClientsCommandOutput> => {
  // @ts-ignore
  return await client.listUserPoolClients(input, ...args);
};
export async function* paginateListUserPoolClients(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUserPoolClientsCommandInput,
  ...additionalArguments: any
): Paginator<ListUserPoolClientsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUserPoolClientsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
