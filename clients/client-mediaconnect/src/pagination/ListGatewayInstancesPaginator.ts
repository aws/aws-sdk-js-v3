// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListGatewayInstancesCommand,
  ListGatewayInstancesCommandInput,
  ListGatewayInstancesCommandOutput,
} from "../commands/ListGatewayInstancesCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListGatewayInstancesCommandInput,
  ...args: any
): Promise<ListGatewayInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewayInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListGatewayInstances(
  config: MediaConnectPaginationConfiguration,
  input: ListGatewayInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewayInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
