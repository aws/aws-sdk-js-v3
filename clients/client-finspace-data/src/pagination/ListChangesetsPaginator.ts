// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListChangesetsCommand,
  ListChangesetsCommandInput,
  ListChangesetsCommandOutput,
} from "../commands/ListChangesetsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FinspaceDataClient,
  input: ListChangesetsCommandInput,
  ...args: any
): Promise<ListChangesetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangesetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListChangesets(
  config: FinspaceDataPaginationConfiguration,
  input: ListChangesetsCommandInput,
  ...additionalArguments: any
): Paginator<ListChangesetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChangesetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FinspaceDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FinspaceData | FinspaceDataClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
