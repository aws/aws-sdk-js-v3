// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListManagedEndpointsCommand,
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "../commands/ListManagedEndpointsCommand";
import { EMRContainers } from "../EMRContainers";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRContainersClient,
  input: ListManagedEndpointsCommandInput,
  ...args: any
): Promise<ListManagedEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMRContainers,
  input: ListManagedEndpointsCommandInput,
  ...args: any
): Promise<ListManagedEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listManagedEndpoints(input, ...args);
};
export async function* paginateListManagedEndpoints(
  config: EMRContainersPaginationConfiguration,
  input: ListManagedEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedEndpointsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EMRContainers) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRContainersClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMRContainers | EMRContainersClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
