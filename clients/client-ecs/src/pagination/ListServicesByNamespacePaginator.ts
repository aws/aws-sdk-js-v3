// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServicesByNamespaceCommand,
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput,
} from "../commands/ListServicesByNamespaceCommand";
import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListServicesByNamespaceCommandInput,
  ...args: any
): Promise<ListServicesByNamespaceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicesByNamespaceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListServicesByNamespaceCommandInput,
  ...args: any
): Promise<ListServicesByNamespaceCommandOutput> => {
  // @ts-ignore
  return await client.listServicesByNamespace(input, ...args);
};
export async function* paginateListServicesByNamespace(
  config: ECSPaginationConfiguration,
  input: ListServicesByNamespaceCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesByNamespaceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicesByNamespaceCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECS | ECSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
