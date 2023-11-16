// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput,
} from "../commands/GetColumnStatisticsTaskRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetColumnStatisticsTaskRunsCommandInput,
  ...args: any
): Promise<GetColumnStatisticsTaskRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetColumnStatisticsTaskRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetColumnStatisticsTaskRuns(
  config: GluePaginationConfiguration,
  input: GetColumnStatisticsTaskRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetColumnStatisticsTaskRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetColumnStatisticsTaskRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
