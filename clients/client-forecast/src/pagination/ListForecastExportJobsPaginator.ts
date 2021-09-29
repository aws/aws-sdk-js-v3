import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import {
  ListForecastExportJobsCommand,
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "../commands/ListForecastExportJobsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListForecastExportJobsCommandInput,
  ...args: any
): Promise<ListForecastExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListForecastExportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Forecast,
  input: ListForecastExportJobsCommandInput,
  ...args: any
): Promise<ListForecastExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listForecastExportJobs(input, ...args);
};
export async function* paginateListForecastExportJobs(
  config: ForecastPaginationConfiguration,
  input: ListForecastExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListForecastExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListForecastExportJobsCommandOutput;
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
