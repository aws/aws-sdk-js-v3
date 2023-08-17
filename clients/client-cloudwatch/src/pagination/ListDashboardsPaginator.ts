// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: ListDashboardsCommandInput,
  ...args: any
): Promise<ListDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDashboardsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDashboards(
  config: CloudWatchPaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...additionalArguments: any
): Paginator<ListDashboardsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDashboardsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
