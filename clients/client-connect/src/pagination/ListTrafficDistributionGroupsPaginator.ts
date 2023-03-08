// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTrafficDistributionGroupsCommand,
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
} from "../commands/ListTrafficDistributionGroupsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListTrafficDistributionGroupsCommandInput,
  ...args: any
): Promise<ListTrafficDistributionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrafficDistributionGroupsCommand(input), ...args);
};
export async function* paginateListTrafficDistributionGroups(
  config: ConnectPaginationConfiguration,
  input: ListTrafficDistributionGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrafficDistributionGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrafficDistributionGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
