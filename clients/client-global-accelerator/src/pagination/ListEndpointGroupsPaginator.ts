// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEndpointGroupsCommand,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
} from "../commands/ListEndpointGroupsCommand";
import { GlobalAccelerator } from "../GlobalAccelerator";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: GlobalAccelerator,
  input: ListEndpointGroupsCommandInput,
  ...args: any
): Promise<ListEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listEndpointGroups(input, ...args);
};
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
    if (config.client instanceof GlobalAccelerator) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlobalAcceleratorClient) {
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
