// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEndpointGroupsCommand,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
} from "../commands/ListEndpointGroupsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListEndpointGroupsCommandInput,
  ...args: any
): Promise<ListEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEndpointGroups(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListEndpointGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
