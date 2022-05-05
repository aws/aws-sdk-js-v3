// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { Panorama } from "../Panorama";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListNodesCommandInput,
  ...args: any
): Promise<ListNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNodesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Panorama,
  input: ListNodesCommandInput,
  ...args: any
): Promise<ListNodesCommandOutput> => {
  // @ts-ignore
  return await client.listNodes(input, ...args);
};
export async function* paginateListNodes(
  config: PanoramaPaginationConfiguration,
  input: ListNodesCommandInput,
  ...additionalArguments: any
): Paginator<ListNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNodesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Panorama) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PanoramaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Panorama | PanoramaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
