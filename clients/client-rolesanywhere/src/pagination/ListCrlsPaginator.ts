// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListCrlsCommand, ListCrlsCommandInput, ListCrlsCommandOutput } from "../commands/ListCrlsCommand";
import { RolesAnywhere } from "../RolesAnywhere";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: RolesAnywhere,
  input: ListCrlsCommandInput,
  ...args: any
): Promise<ListCrlsCommandOutput> => {
  // @ts-ignore
  return await client.listCrls(input, ...args);
};
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
    if (config.client instanceof RolesAnywhere) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RolesAnywhereClient) {
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
