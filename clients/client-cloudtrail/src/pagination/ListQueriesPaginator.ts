// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import { ListQueriesCommand, ListQueriesCommandInput, ListQueriesCommandOutput } from "../commands/ListQueriesCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListQueriesCommandInput,
  ...args: any
): Promise<ListQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListQueries(
  config: CloudTrailPaginationConfiguration,
  input: ListQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListQueriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
