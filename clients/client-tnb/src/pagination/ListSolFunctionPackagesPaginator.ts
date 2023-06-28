// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSolFunctionPackagesCommand,
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput,
} from "../commands/ListSolFunctionPackagesCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TnbClient,
  input: ListSolFunctionPackagesCommandInput,
  ...args: any
): Promise<ListSolFunctionPackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSolFunctionPackagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSolFunctionPackages(
  config: TnbPaginationConfiguration,
  input: ListSolFunctionPackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListSolFunctionPackagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSolFunctionPackagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof TnbClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Tnb | TnbClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
