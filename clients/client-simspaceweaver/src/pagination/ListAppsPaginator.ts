// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { SimSpaceWeaver } from "../SimSpaceWeaver";
import { SimSpaceWeaverClient } from "../SimSpaceWeaverClient";
import { SimSpaceWeaverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SimSpaceWeaverClient,
  input: ListAppsCommandInput,
  ...args: any
): Promise<ListAppsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SimSpaceWeaver,
  input: ListAppsCommandInput,
  ...args: any
): Promise<ListAppsCommandOutput> => {
  // @ts-ignore
  return await client.listApps(input, ...args);
};
export async function* paginateListApps(
  config: SimSpaceWeaverPaginationConfiguration,
  input: ListAppsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SimSpaceWeaver) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SimSpaceWeaverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SimSpaceWeaver | SimSpaceWeaverClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
