// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPredictorBacktestExportJobsCommand,
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "../commands/ListPredictorBacktestExportJobsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListPredictorBacktestExportJobsCommandInput,
  ...args: any
): Promise<ListPredictorBacktestExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPredictorBacktestExportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPredictorBacktestExportJobs(
  config: ForecastPaginationConfiguration,
  input: ListPredictorBacktestExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListPredictorBacktestExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPredictorBacktestExportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
