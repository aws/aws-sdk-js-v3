// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualRoutersCommand,
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
} from "../commands/ListVirtualRoutersCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListVirtualRoutersCommandInput,
  ...args: any
): Promise<ListVirtualRoutersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualRoutersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppMesh,
  input: ListVirtualRoutersCommandInput,
  ...args: any
): Promise<ListVirtualRoutersCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualRouters(input, ...args);
};
export async function* paginateListVirtualRouters(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualRoutersCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualRoutersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVirtualRoutersCommandOutput;
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
