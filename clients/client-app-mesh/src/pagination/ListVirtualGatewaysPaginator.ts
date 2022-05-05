// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualGatewaysCommand,
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "../commands/ListVirtualGatewaysCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListVirtualGatewaysCommandInput,
  ...args: any
): Promise<ListVirtualGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualGatewaysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppMesh,
  input: ListVirtualGatewaysCommandInput,
  ...args: any
): Promise<ListVirtualGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualGateways(input, ...args);
};
export async function* paginateListVirtualGateways(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualGatewaysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVirtualGatewaysCommandOutput;
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
