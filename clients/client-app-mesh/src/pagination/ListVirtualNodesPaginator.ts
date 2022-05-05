// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualNodesCommand,
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput,
} from "../commands/ListVirtualNodesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListVirtualNodesCommandInput,
  ...args: any
): Promise<ListVirtualNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualNodesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppMesh,
  input: ListVirtualNodesCommandInput,
  ...args: any
): Promise<ListVirtualNodesCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualNodes(input, ...args);
};
export async function* paginateListVirtualNodes(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualNodesCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVirtualNodesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof AppMesh) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppMeshClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppMesh | AppMeshClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
