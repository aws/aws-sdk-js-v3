// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKxChangesetsCommand,
  ListKxChangesetsCommandInput,
  ListKxChangesetsCommandOutput,
} from "../commands/ListKxChangesetsCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FinspaceClient,
  input: ListKxChangesetsCommandInput,
  ...args: any
): Promise<ListKxChangesetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKxChangesetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKxChangesets(
  config: FinspacePaginationConfiguration,
  input: ListKxChangesetsCommandInput,
  ...additionalArguments: any
): Paginator<ListKxChangesetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKxChangesetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FinspaceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Finspace | FinspaceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
