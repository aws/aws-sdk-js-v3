import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import {
  ListPredictorBacktestExportJobsCommand,
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "../commands/ListPredictorBacktestExportJobsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Forecast,
  input: ListPredictorBacktestExportJobsCommandInput,
  ...args: any
): Promise<ListPredictorBacktestExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listPredictorBacktestExportJobs(input, ...args);
};
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
    if (config.client instanceof Forecast) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
