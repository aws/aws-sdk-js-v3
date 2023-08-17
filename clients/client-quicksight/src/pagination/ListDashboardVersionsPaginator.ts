// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
