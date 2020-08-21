import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListRoutesCommandInput,
  ...args: any
): Promise<ListRoutesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoutesCommand(input, ...args));
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListRoutesCommandInput,
  ...args: any
): Promise<ListRoutesCommandOutput> => {
  // @ts-ignore
  return await client.listRoutes(input, ...args);
};
export async function* listRoutesPaginate(
  config: AppMeshPaginationConfiguration,
  input: ListRoutesCommandInput,
  ...additionalArguments: any
): Paginator<ListRoutesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRoutesCommandOutput;
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
