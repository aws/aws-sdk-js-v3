// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVPCConnectionsCommand,
  ListVPCConnectionsCommandInput,
  ListVPCConnectionsCommandOutput,
} from "../commands/ListVPCConnectionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListVPCConnectionsCommandInput,
  ...args: any
): Promise<ListVPCConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVPCConnectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVPCConnections(
  config: QuickSightPaginationConfiguration,
  input: ListVPCConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListVPCConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVPCConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
