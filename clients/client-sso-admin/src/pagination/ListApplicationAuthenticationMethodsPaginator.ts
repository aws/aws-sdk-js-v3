// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListApplicationAuthenticationMethodsCommand,
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput,
} from "../commands/ListApplicationAuthenticationMethodsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListApplicationAuthenticationMethodsCommandInput,
  ...args: any
): Promise<ListApplicationAuthenticationMethodsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationAuthenticationMethodsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationAuthenticationMethods(
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationAuthenticationMethodsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationAuthenticationMethodsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationAuthenticationMethodsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
