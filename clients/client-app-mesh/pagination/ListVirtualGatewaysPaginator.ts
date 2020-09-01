import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualGatewaysCommand,
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "../commands/ListVirtualGatewaysCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListVirtualGatewaysCommandInput,
  ...args: any
): Promise<ListVirtualGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualGatewaysCommand(input, ...args));
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListVirtualGatewaysCommandInput,
  ...args: any
): Promise<ListVirtualGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualGateways(input, ...args);
};
export async function* listVirtualGatewaysPaginate(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualGatewaysCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListVirtualGatewaysCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof AppMesh) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppMeshClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppMesh | AppMeshClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
