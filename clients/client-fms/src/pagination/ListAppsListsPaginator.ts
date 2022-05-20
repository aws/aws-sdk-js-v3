// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAppsListsCommand,
  ListAppsListsCommandInput,
  ListAppsListsCommandOutput,
} from "../commands/ListAppsListsCommand";
import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FMSClient,
  input: ListAppsListsCommandInput,
  ...args: any
): Promise<ListAppsListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppsListsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FMS,
  input: ListAppsListsCommandInput,
  ...args: any
): Promise<ListAppsListsCommandOutput> => {
  // @ts-ignore
  return await client.listAppsLists(input, ...args);
};
export async function* paginateListAppsLists(
  config: FMSPaginationConfiguration,
  input: ListAppsListsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppsListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppsListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
