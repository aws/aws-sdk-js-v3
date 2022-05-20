// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListIdentityProviderConfigsCommand,
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "../commands/ListIdentityProviderConfigsCommand";
import { EKS } from "../EKS";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListIdentityProviderConfigsCommandInput,
  ...args: any
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentityProviderConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EKS,
  input: ListIdentityProviderConfigsCommandInput,
  ...args: any
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listIdentityProviderConfigs(input, ...args);
};
export async function* paginateListIdentityProviderConfigs(
  config: EKSPaginationConfiguration,
  input: ListIdentityProviderConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentityProviderConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdentityProviderConfigsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
