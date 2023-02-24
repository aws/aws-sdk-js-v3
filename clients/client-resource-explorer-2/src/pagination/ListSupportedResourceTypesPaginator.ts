// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSupportedResourceTypesCommand,
  ListSupportedResourceTypesCommandInput,
  ListSupportedResourceTypesCommandOutput,
} from "../commands/ListSupportedResourceTypesCommand";
import { ResourceExplorer2 } from "../ResourceExplorer2";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceExplorer2Client,
  input: ListSupportedResourceTypesCommandInput,
  ...args: any
): Promise<ListSupportedResourceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSupportedResourceTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceExplorer2,
  input: ListSupportedResourceTypesCommandInput,
  ...args: any
): Promise<ListSupportedResourceTypesCommandOutput> => {
  // @ts-ignore
  return await client.listSupportedResourceTypes(input, ...args);
};
export async function* paginateListSupportedResourceTypes(
  config: ResourceExplorer2PaginationConfiguration,
  input: ListSupportedResourceTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListSupportedResourceTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSupportedResourceTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ResourceExplorer2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceExplorer2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceExplorer2 | ResourceExplorer2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
