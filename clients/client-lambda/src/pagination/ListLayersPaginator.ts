import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import { ListLayersCommand, ListLayersCommandInput, ListLayersCommandOutput } from "../commands/ListLayersCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListLayersCommandInput,
  ...args: any
): Promise<ListLayersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLayersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListLayersCommandInput,
  ...args: any
): Promise<ListLayersCommandOutput> => {
  // @ts-ignore
  return await client.listLayers(input, ...args);
};
export async function* paginateListLayers(
  config: LambdaPaginationConfiguration,
  input: ListLayersCommandInput,
  ...additionalArguments: any
): Paginator<ListLayersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLayersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
