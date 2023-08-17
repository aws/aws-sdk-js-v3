// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppFabricClient } from "../AppFabricClient";
import {
  ListAppAuthorizationsCommand,
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput,
} from "../commands/ListAppAuthorizationsCommand";
import { AppFabricPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppFabricClient,
  input: ListAppAuthorizationsCommandInput,
  ...args: any
): Promise<ListAppAuthorizationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppAuthorizationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppAuthorizations(
  config: AppFabricPaginationConfiguration,
  input: ListAppAuthorizationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppAuthorizationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppAuthorizationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AppFabricClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppFabric | AppFabricClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
