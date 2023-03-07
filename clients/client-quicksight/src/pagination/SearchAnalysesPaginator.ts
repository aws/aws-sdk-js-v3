// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchAnalysesCommand,
  SearchAnalysesCommandInput,
  SearchAnalysesCommandOutput,
} from "../commands/SearchAnalysesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchAnalysesCommandInput,
  ...args: any
): Promise<SearchAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchAnalysesCommand(input), ...args);
};
export async function* paginateSearchAnalyses(
  config: QuickSightPaginationConfiguration,
  input: SearchAnalysesCommandInput,
  ...additionalArguments: any
): Paginator<SearchAnalysesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchAnalysesCommandOutput;
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
