// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKxClusterNodesCommand,
  ListKxClusterNodesCommandInput,
  ListKxClusterNodesCommandOutput,
} from "../commands/ListKxClusterNodesCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FinspaceClient,
  input: ListKxClusterNodesCommandInput,
  ...args: any
): Promise<ListKxClusterNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKxClusterNodesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKxClusterNodes(
  config: FinspacePaginationConfiguration,
  input: ListKxClusterNodesCommandInput,
  ...additionalArguments: any
): Paginator<ListKxClusterNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKxClusterNodesCommandOutput;
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
