// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand";
import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListDashboardVersionsCommandInput,
  ...args: any
): Promise<ListDashboardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDashboardVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListDashboardVersionsCommandInput,
  ...args: any
): Promise<ListDashboardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listDashboardVersions(input, ...args);
};
export async function* paginateListDashboardVersions(
  config: QuickSightPaginationConfiguration,
  input: ListDashboardVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDashboardVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDashboardVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
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
