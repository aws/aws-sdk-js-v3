// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListApplicationProvidersCommand,
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput,
} from "../commands/ListApplicationProvidersCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListApplicationProvidersCommandInput,
  ...args: any
): Promise<ListApplicationProvidersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationProvidersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationProviders(
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationProvidersCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationProvidersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationProvidersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
