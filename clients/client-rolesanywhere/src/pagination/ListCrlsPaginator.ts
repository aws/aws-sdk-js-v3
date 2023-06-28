// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListCrlsCommand, ListCrlsCommandInput, ListCrlsCommandOutput } from "../commands/ListCrlsCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RolesAnywhereClient,
  input: ListCrlsCommandInput,
  ...args: any
): Promise<ListCrlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCrlsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCrls(
  config: RolesAnywherePaginationConfiguration,
  input: ListCrlsCommandInput,
  ...additionalArguments: any
): Paginator<ListCrlsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCrlsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof RolesAnywhereClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RolesAnywhere | RolesAnywhereClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
