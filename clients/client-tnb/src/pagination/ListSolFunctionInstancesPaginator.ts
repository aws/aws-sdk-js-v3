// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSolFunctionInstancesCommand,
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
} from "../commands/ListSolFunctionInstancesCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TnbClient,
  input: ListSolFunctionInstancesCommandInput,
  ...args: any
): Promise<ListSolFunctionInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSolFunctionInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSolFunctionInstances(
  config: TnbPaginationConfiguration,
  input: ListSolFunctionInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListSolFunctionInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSolFunctionInstancesCommandOutput;
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
