// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetFindingHistoryCommand,
  GetFindingHistoryCommandInput,
  GetFindingHistoryCommandOutput,
} from "../commands/GetFindingHistoryCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetFindingHistoryCommandInput,
  ...args: any
): Promise<GetFindingHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFindingHistoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetFindingHistory(
  config: SecurityHubPaginationConfiguration,
  input: GetFindingHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetFindingHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFindingHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
