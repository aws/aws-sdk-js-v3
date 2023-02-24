// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListModelManifestNodesCommand,
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
} from "../commands/ListModelManifestNodesCommand";
import { IoTFleetWise } from "../IoTFleetWise";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTFleetWiseClient,
  input: ListModelManifestNodesCommandInput,
  ...args: any
): Promise<ListModelManifestNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelManifestNodesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTFleetWise,
  input: ListModelManifestNodesCommandInput,
  ...args: any
): Promise<ListModelManifestNodesCommandOutput> => {
  // @ts-ignore
  return await client.listModelManifestNodes(input, ...args);
};
export async function* paginateListModelManifestNodes(
  config: IoTFleetWisePaginationConfiguration,
  input: ListModelManifestNodesCommandInput,
  ...additionalArguments: any
): Paginator<ListModelManifestNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelManifestNodesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTFleetWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTFleetWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTFleetWise | IoTFleetWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
