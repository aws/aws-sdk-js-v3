// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListChangesetsCommand,
  ListChangesetsCommandInput,
  ListChangesetsCommandOutput,
} from "../commands/ListChangesetsCommand";
import { FinspaceData } from "../FinspaceData";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: FinspaceData,
  input: ListChangesetsCommandInput,
  ...args: any
): Promise<ListChangesetsCommandOutput> => {
  // @ts-ignore
  return await client.listChangesets(input, ...args);
};
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
    if (config.client instanceof FinspaceData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FinspaceDataClient) {
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
