// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListRoutesCommandInput,
  ...args: any
): Promise<ListRoutesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoutesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppMesh,
  input: ListRoutesCommandInput,
  ...args: any
): Promise<ListRoutesCommandOutput> => {
  // @ts-ignore
  return await client.listRoutes(input, ...args);
};
export async function* paginateListRoutes(
  config: AppMeshPaginationConfiguration,
  input: ListRoutesCommandInput,
  ...additionalArguments: any
): Paginator<ListRoutesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoutesCommandOutput;
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
