// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCoverageStatisticsCommand,
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "../commands/ListCoverageStatisticsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: ListCoverageStatisticsCommandInput,
  ...args: any
): Promise<ListCoverageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCoverageStatisticsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCoverageStatistics(
  config: Inspector2PaginationConfiguration,
  input: ListCoverageStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<ListCoverageStatisticsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCoverageStatisticsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Inspector2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector2 | Inspector2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
