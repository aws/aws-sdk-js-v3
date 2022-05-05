// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: ListIdentityProvidersCommandInput,
  ...args: any
): Promise<ListIdentityProvidersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentityProvidersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: ListIdentityProvidersCommandInput,
  ...args: any
): Promise<ListIdentityProvidersCommandOutput> => {
  // @ts-ignore
  return await client.listIdentityProviders(input, ...args);
};
export async function* paginateListIdentityProviders(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListIdentityProvidersCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentityProvidersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdentityProvidersCommandOutput;
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
