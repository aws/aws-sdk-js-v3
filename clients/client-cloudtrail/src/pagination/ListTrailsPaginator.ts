// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import { ListTrailsCommand, ListTrailsCommandInput, ListTrailsCommandOutput } from "../commands/ListTrailsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListTrailsCommandInput,
  ...args: any
): Promise<ListTrailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrailsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTrails(
  config: CloudTrailPaginationConfiguration,
  input: ListTrailsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrailsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrailsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
