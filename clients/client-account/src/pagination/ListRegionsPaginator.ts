// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AccountClient } from "../AccountClient";
import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "../commands/ListRegionsCommand";
import { AccountPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AccountClient,
  input: ListRegionsCommandInput,
  ...args: any
): Promise<ListRegionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRegionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRegions(
  config: AccountPaginationConfiguration,
  input: ListRegionsCommandInput,
  ...additionalArguments: any
): Paginator<ListRegionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRegionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AccountClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Account | AccountClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
