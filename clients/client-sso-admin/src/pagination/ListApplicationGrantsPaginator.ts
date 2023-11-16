// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListApplicationGrantsCommand,
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput,
} from "../commands/ListApplicationGrantsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListApplicationGrantsCommandInput,
  ...args: any
): Promise<ListApplicationGrantsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationGrantsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationGrants(
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationGrantsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationGrantsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationGrantsCommandOutput;
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
