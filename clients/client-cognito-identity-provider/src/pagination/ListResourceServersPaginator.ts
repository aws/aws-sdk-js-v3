// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListResourceServersCommand,
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "../commands/ListResourceServersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: ListResourceServersCommandInput,
  ...args: any
): Promise<ListResourceServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: ListResourceServersCommandInput,
  ...args: any
): Promise<ListResourceServersCommandOutput> => {
  // @ts-ignore
  return await client.listResourceServers(input, ...args);
};
export async function* paginateListResourceServers(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListResourceServersCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceServersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceServersCommandOutput;
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
