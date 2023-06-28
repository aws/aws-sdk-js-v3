// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListManagedEndpointsCommand,
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "../commands/ListManagedEndpointsCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof EMRContainersClient) {
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
