import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualRoutersCommand,
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
} from "../commands/ListVirtualRoutersCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListVirtualRoutersCommandInput,
  ...args: any
): Promise<ListVirtualRoutersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualRoutersCommand(input, ...args));
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListVirtualRoutersCommandInput,
  ...args: any
): Promise<ListVirtualRoutersCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualRouters(input, ...args);
};
export async function* listVirtualRoutersPaginate(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualRoutersCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualRoutersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListVirtualRoutersCommandOutput;
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
