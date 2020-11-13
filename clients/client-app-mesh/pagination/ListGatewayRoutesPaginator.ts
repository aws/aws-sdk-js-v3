import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import {
  ListGatewayRoutesCommand,
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
} from "../commands/ListGatewayRoutesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListGatewayRoutesCommandInput,
  ...args: any
): Promise<ListGatewayRoutesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewayRoutesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListGatewayRoutesCommandInput,
  ...args: any
): Promise<ListGatewayRoutesCommandOutput> => {
  // @ts-ignore
  return await client.listGatewayRoutes(input, ...args);
};
export async function* listGatewayRoutesPaginate(
  config: AppMeshPaginationConfiguration,
  input: ListGatewayRoutesCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayRoutesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewayRoutesCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
